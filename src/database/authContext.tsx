"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { 
  User, 
  signInWithPopup, 
  GoogleAuthProvider, 
  GithubAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile as updateFirebaseProfile,
  signInAnonymously,
  signOut,
  onAuthStateChanged,
  getAdditionalUserInfo
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./config";

export interface UserProject {
  name: string;
  description: string;
  techStack: string[];
  url?: string | null;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  targetRole?: string;
  experienceLevel?: "Student" | "Entry Level" | "Mid Level" | "Senior";
  preferredLocation?: string;
  skills: string[];
  projects?: UserProject[];
  githubUrl?: string | null;
  linkedinUrl?: string | null;
  portfolioUrl?: string | null;
  resumeName?: string;
  resumeSummary?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserCertificate {
  id: string;
  courseId: string;
  courseTitle: string;
  company: string;
  issuedAt: string;
  credentialId: string;
  skills: string[];
  recipientName: string;
}

export interface CourseProgressRecord {
  completedModules: string[];
  progressPercent: number;
  lastAccessedAt: string;
}

export type CourseProgressMap = Record<string, CourseProgressRecord>;

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  isLoading: boolean;
  courseProgress: CourseProgressMap;
  certificates: UserCertificate[];
  loginWithGoogle: () => Promise<void>;
  loginWithGithub: () => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  signupWithEmail: (email: string, password: string, displayName: string) => Promise<void>;
  loginAsGuest: () => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
  toggleModuleComplete: (courseId: string, moduleId: string, totalModules: number) => Promise<{ completed: boolean; percent: number }>;
  claimCertificate: (courseId: string, courseTitle: string, company: string, skills: string[]) => Promise<UserCertificate>;
  isModuleCompleted: (courseId: string, moduleId: string) => boolean;
  getCourseProgress: (courseId: string) => number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const PROFILE_STORAGE_KEY = "careermap_user_profile";
const PROGRESS_STORAGE_KEY = "careermap_course_progress";
const CERTS_STORAGE_KEY = "careermap_user_certificates";

function sanitizeForFirestore<T>(data: T): T {
  if (data === null || data === undefined) {
    return data;
  }
  if (Array.isArray(data)) {
    return data.map(item => sanitizeForFirestore(item)) as unknown as T;
  }
  if (typeof data === "object") {
    const result: Record<string, any> = {};
    for (const [key, value] of Object.entries(data)) {
      if (value !== undefined) {
        result[key] = sanitizeForFirestore(value);
      }
    }
    return result as T;
  }
  return data;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [courseProgress, setCourseProgress] = useState<CourseProgressMap>({});
  const [certificates, setCertificates] = useState<UserCertificate[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Track when we last saved locally to avoid Firestore overwriting fresh data
  const lastLocalUpdateRef = React.useRef<number>(0);

  // Initialize local caches
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);
        if (storedProfile) setProfile(JSON.parse(storedProfile));

        const storedProgress = localStorage.getItem(PROGRESS_STORAGE_KEY);
        if (storedProgress) setCourseProgress(JSON.parse(storedProgress));

        const storedCerts = localStorage.getItem(CERTS_STORAGE_KEY);
        if (storedCerts) setCertificates(JSON.parse(storedCerts));
      } catch (e) {
        console.warn("Could not read from localStorage", e);
      }
    }
  }, []);

  // Listen to Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        // If we just saved locally (within last 5 seconds), don't overwrite from Firestore
        const timeSinceLocalUpdate = Date.now() - lastLocalUpdateRef.current;
        if (timeSinceLocalUpdate < 5000) {
          setIsLoading(false);
          return;
        }

        try {
          // Attempt to load from Firestore
          const userDocRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(userDocRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            const loadedProfile: UserProfile = {
              uid: currentUser.uid,
              email: currentUser.email || "",
              displayName: currentUser.displayName || data.displayName || "Learner",
              photoURL: currentUser.photoURL || data.photoURL,
              targetRole: data.targetRole || "",
              experienceLevel: data.experienceLevel || "Entry Level",
              preferredLocation: data.preferredLocation || "",
              skills: data.skills || [],
              projects: data.projects || [],
              githubUrl: data.githubUrl || null,
              linkedinUrl: data.linkedinUrl || null,
              portfolioUrl: data.portfolioUrl || null,
              resumeName: data.resumeName,
              resumeSummary: data.resumeSummary,
              createdAt: data.createdAt,
              updatedAt: data.updatedAt,
            };
            setProfile(loadedProfile);
            if (typeof window !== "undefined") {
              localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(loadedProfile));
            }

            if (data.courseProgress) {
              setCourseProgress(data.courseProgress);
              if (typeof window !== "undefined") {
                localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(data.courseProgress));
              }
            } else {
              setCourseProgress({});
              if (typeof window !== "undefined") {
                localStorage.removeItem(PROGRESS_STORAGE_KEY);
              }
            }

            if (data.certificates) {
              setCertificates(data.certificates);
              if (typeof window !== "undefined") {
                localStorage.setItem(CERTS_STORAGE_KEY, JSON.stringify(data.certificates));
              }
            } else {
              setCertificates([]);
              if (typeof window !== "undefined") {
                localStorage.removeItem(CERTS_STORAGE_KEY);
              }
            }
          } else {
            // Create initial profile if not in Firestore yet
            const initialProfile: UserProfile = {
              uid: currentUser.uid,
              email: currentUser.email || "",
              displayName: currentUser.displayName || (currentUser.isAnonymous ? "Guest Explorer" : "Learner"),
              ...(currentUser.photoURL ? { photoURL: currentUser.photoURL } : {}),
              skills: [],
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString()
            };
            setProfile(initialProfile);
            if (typeof window !== "undefined") {
              localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(initialProfile));
            }
            // Save to Firestore with sanitization
            setDoc(userDocRef, sanitizeForFirestore(initialProfile), { merge: true })
              .catch((err) => console.error("Initial Firestore user creation failed:", err));
          }
        } catch (err) {
          console.warn("Firestore fetch error, using local state", err);
        }
      } else {
        // Logged out
        setProfile(null);
        setCourseProgress({});
        setCertificates([]);
      }

      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const executeAuthWithRetry = async <T,>(action: () => Promise<T>, retries = 2): Promise<T> => {
    for (let i = 0; i < retries; i++) {
      try {
        return await action();
      } catch (err: any) {
        const msg = (err?.message || "") + " " + (err?.code || "");
        if (
          msg.includes("Database is closing") ||
          msg.includes("closing/hidden") ||
          msg.includes("database-error")
        ) {
          console.warn(`Transient database storage error during auth, retrying (${i + 1}/${retries})...`, err);
          await new Promise((resolve) => setTimeout(resolve, 500));
          continue;
        }
        throw err;
      }
    }
    return action();
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await executeAuthWithRetry(() => signInWithPopup(auth, provider));
    if (result?.user) {
      try {
        const userDocRef = doc(db, "users", result.user.uid);
        const snap = await getDoc(userDocRef);
        if (!snap.exists()) {
          const initialProfile: UserProfile = {
            uid: result.user.uid,
            email: result.user.email || "",
            displayName: result.user.displayName || "Learner",
            ...(result.user.photoURL ? { photoURL: result.user.photoURL } : {}),
            skills: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          await setDoc(userDocRef, sanitizeForFirestore(initialProfile), { merge: true });
        }
      } catch (err) {
        console.warn("Failed to ensure user doc exists in Firestore:", err);
      }
    }
  };

  const loginWithGithub = async () => {
    const provider = new GithubAuthProvider();
    const result = await executeAuthWithRetry(() => signInWithPopup(auth, provider));
    if (result?.user) {
      try {
        const userDocRef = doc(db, "users", result.user.uid);
        const snap = await getDoc(userDocRef);
        if (!snap.exists()) {
          const initialProfile: UserProfile = {
            uid: result.user.uid,
            email: result.user.email || "",
            displayName: result.user.displayName || "Learner",
            ...(result.user.photoURL ? { photoURL: result.user.photoURL } : {}),
            skills: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          await setDoc(userDocRef, sanitizeForFirestore(initialProfile), { merge: true });
        }
      } catch (err) {
        console.warn("Failed to ensure user doc exists in Firestore:", err);
      }
    }
    
    // Fetch GitHub username and data
    try {
      const additionalInfo = getAdditionalUserInfo(result);
      const username = additionalInfo?.profile?.login as string | undefined;
      
      if (username) {
        let fetchedSummary = "";
        let fetchedSkills: string[] = [];
        
        // Try fetching README
        try {
          let readmeRes = await fetch(`https://raw.githubusercontent.com/${username}/${username}/main/README.md`);
          if (!readmeRes.ok) {
             readmeRes = await fetch(`https://raw.githubusercontent.com/${username}/${username}/master/README.md`);
          }
          if (readmeRes.ok) {
             fetchedSummary = await readmeRes.text();
          }
        } catch (e) {
           console.warn("Failed to fetch README", e);
        }

        // Fetch Repos for Skills/Projects
        try {
          const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
          if (reposRes.ok) {
            const repos = await reposRes.json();
            const languages = new Set<string>();
            repos.forEach((repo: any) => {
              if (repo.language) languages.add(repo.language);
            });
            fetchedSkills = Array.from(languages);
            
            if (repos.length > 0) {
              fetchedSummary += "\n\n### Recent GitHub Projects:\n" + repos.map((r: any) => `- **${r.name}**: ${r.description || 'No description'} (${r.language || 'Multiple'})`).join("\n");
            }
          }
        } catch (e) {
          console.warn("Failed to fetch repos", e);
        }

        // Defer the profile update to allow auth state to initialize
        if (fetchedSummary || fetchedSkills.length > 0) {
          setTimeout(() => {
             updateProfile({
               ...(fetchedSkills.length > 0 && { skills: fetchedSkills }),
               ...(fetchedSummary && { resumeSummary: fetchedSummary })
             });
          }, 2500);
        }
      }
    } catch (e) {
       console.warn("Error parsing github data", e);
    }
  };

  const loginWithEmail = async (email: string, pass: string) => {
    await signInWithEmailAndPassword(auth, email, pass);
  };

  const signupWithEmail = async (email: string, pass: string, displayName: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email, pass);
    if (cred.user && displayName) {
      await updateFirebaseProfile(cred.user, { displayName });
    }
  };

  const loginAsGuest = async () => {
    try {
      await signInAnonymously(auth);
    } catch (e) {
      // Fallback guest session in local storage
      const guestProfile: UserProfile = {
        uid: "guest-" + Math.random().toString(36).substring(2, 9),
        email: "guest@careermap.ai",
        displayName: "Guest Explorer",
        skills: ["React", "JavaScript", "HTML/CSS", "Git"],
        targetRole: "Frontend Developer",
        experienceLevel: "Entry Level",
        createdAt: new Date().toISOString()
      };
      setProfile(guestProfile);
      if (typeof window !== "undefined") {
        localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(guestProfile));
      }
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.warn("Sign out error", e);
    }
    setUser(null);
    setProfile(null);
    setCourseProgress({});
    setCertificates([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      localStorage.removeItem(PROGRESS_STORAGE_KEY);
      localStorage.removeItem(CERTS_STORAGE_KEY);
    }
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    lastLocalUpdateRef.current = Date.now();

    const newProfile: UserProfile = {
      ...(profile || {
        uid: user?.uid || "local-user",
        email: user?.email || "",
        displayName: user?.displayName || "Learner",
        skills: [],
      }),
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    setProfile(newProfile);
    if (typeof window !== "undefined") {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(newProfile));
    }

    if (user?.uid) {
      try {
        const userDocRef = doc(db, "users", user.uid);
        await setDoc(userDocRef, sanitizeForFirestore(newProfile), { merge: true });
      } catch (e) {
        console.error("Firestore profile save failed", e);
      }
    }
  };

  const toggleModuleComplete = async (courseId: string, moduleId: string, totalModules: number) => {
    const current = courseProgress[courseId] || {
      completedModules: [],
      progressPercent: 0,
      lastAccessedAt: new Date().toISOString()
    };

    const exists = current.completedModules.includes(moduleId);
    const newModules = exists
      ? current.completedModules.filter(id => id !== moduleId)
      : [...current.completedModules, moduleId];

    const safeTotal = Math.max(totalModules, 1);
    const percent = Math.min(100, Math.round((newModules.length / safeTotal) * 100));

    const updatedRecord: CourseProgressRecord = {
      completedModules: newModules,
      progressPercent: percent,
      lastAccessedAt: new Date().toISOString()
    };

    const nextProgress: CourseProgressMap = {
      ...courseProgress,
      [courseId]: updatedRecord
    };

    setCourseProgress(nextProgress);
    if (typeof window !== "undefined") {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(nextProgress));
    }

    if (user?.uid) {
      try {
        const userDocRef = doc(db, "users", user.uid);
        await setDoc(userDocRef, sanitizeForFirestore({ courseProgress: nextProgress }), { merge: true });
      } catch (e) {
        console.warn("Progress sync to Firestore failed", e);
      }
    }

    return { completed: !exists, percent };
  };

  const claimCertificate = async (
    courseId: string, 
    courseTitle: string, 
    company: string, 
    skills: string[]
  ): Promise<UserCertificate> => {
    // Check if certificate already exists
    const existing = certificates.find(c => c.courseId === courseId);
    if (existing) return existing;

    const certId = "CM-" + Math.random().toString(36).substring(2, 8).toUpperCase() + "-" + new Date().getFullYear();
    const newCert: UserCertificate = {
      id: "cert-" + Date.now(),
      courseId,
      courseTitle,
      company,
      issuedAt: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      credentialId: certId,
      skills,
      recipientName: profile?.displayName || user?.displayName || "Learner"
    };

    const updatedCerts = [newCert, ...certificates];
    setCertificates(updatedCerts);

    if (typeof window !== "undefined") {
      localStorage.setItem(CERTS_STORAGE_KEY, JSON.stringify(updatedCerts));
    }

    if (user?.uid) {
      try {
        const userDocRef = doc(db, "users", user.uid);
        await setDoc(userDocRef, sanitizeForFirestore({ certificates: updatedCerts }), { merge: true });
      } catch (e) {
        console.warn("Cert sync to Firestore failed", e);
      }
    }

    return newCert;
  };

  const isModuleCompleted = useCallback((courseId: string, moduleId: string): boolean => {
    return !!courseProgress[courseId]?.completedModules?.includes(moduleId);
  }, [courseProgress]);

  const getCourseProgress = useCallback((courseId: string): number => {
    return courseProgress[courseId]?.progressPercent || 0;
  }, [courseProgress]);

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        isLoading,
        courseProgress,
        certificates,
        loginWithGoogle,
        loginWithGithub,
        loginWithEmail,
        signupWithEmail,
        loginAsGuest,
        logout,
        updateProfile,
        toggleModuleComplete,
        claimCertificate,
        isModuleCompleted,
        getCourseProgress
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
