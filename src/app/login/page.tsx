"use client";

import { useState } from "react";
import { LiquidGlass } from "@/components/layout/LiquidGlass";
import { AnimatedBackground } from "@/components/layout/AnimatedBackground";
import { Mail, Lock, User, ArrowRight, Sparkles, AlertCircle, Compass } from "lucide-react";
import { useAuth } from "@/database/authContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const { loginWithGoogle, loginWithGithub, loginWithEmail, signupWithEmail, loginAsGuest } = useAuth();

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setErrorMsg("");
    try {
      await loginWithGoogle();
      router.push("/dashboard?onboarding=prompt");
    } catch (error: any) {
      console.error("Google login failed", error);
      if (error.code === "auth/popup-closed-by-user") {
        setErrorMsg("Sign in window was closed. Please try again.");
      } else {
        setErrorMsg(error.message || "Google authentication failed.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGithubLogin = async () => {
    setIsLoading(true);
    setErrorMsg("");
    try {
      await loginWithGithub();
      router.push("/dashboard?onboarding=prompt");
    } catch (error: any) {
      console.error("GitHub login failed", error);
      if (error.code === "auth/popup-closed-by-user") {
        setErrorMsg("Sign in window was closed. Please try again.");
      } else {
        setErrorMsg(error.message || "GitHub authentication failed.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg("Please provide both email and password.");
      return;
    }
    if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);
    setErrorMsg("");

    try {
      if (mode === "signup") {
        await signupWithEmail(email, password, displayName || "Learner");
      } else {
        await loginWithEmail(email, password);
      }
      router.push("/dashboard?onboarding=prompt");
    } catch (err: any) {
      console.error("Email auth error:", err);
      if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password" || err.code === "auth/invalid-credential") {
        setErrorMsg("Invalid email or password. Please check your credentials.");
      } else if (err.code === "auth/email-already-in-use") {
        setErrorMsg("This email is already registered. Please sign in instead.");
        setMode("signin");
      } else if (err.code === "auth/weak-password") {
        setErrorMsg("Password should be at least 6 characters.");
      } else {
        setErrorMsg(err.message || "Authentication failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = async () => {
    setIsLoading(true);
    setErrorMsg("");
    try {
      await loginAsGuest();
      router.push("/dashboard?onboarding=prompt");
    } catch (err) {
      console.error("Guest login error", err);
      router.push("/dashboard");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[100dvh] bg-[#f0f2f5] flex flex-col justify-center relative overflow-hidden font-sans">
      <AnimatedBackground />
      
      {/* Brand Header */}
      <div className="absolute top-6 left-6 z-10">
        <Link href="/">
          <LiquidGlass className="px-5 py-2.5 rounded-full flex items-center gap-2 cursor-pointer hover:bg-white/50 transition-colors">
            <Image src="/logo.png" alt="CareerMap AI Logo" width={160} height={160} className="object-contain w-auto h-10 scale-[1.2]" priority />
            <span className="text-base font-bold tracking-tight text-gray-900">CareerMap AI</span>
          </LiquidGlass>
        </Link>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 pt-28 pb-12 z-10 overflow-y-auto">
        <LiquidGlass className="w-full max-w-md p-6 sm:p-8 rounded-[2rem] flex flex-col items-center text-center shadow-xl border border-white/60">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-[11px] font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-Powered Career Intelligence</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 mb-1">
            Welcome
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-6 font-medium">
            Sign in to unlock personalized jobs and tailored courses
          </p>

          {/* Mode Switcher */}
          {/* Mode Switcher Removed */}

          {/* Error Banner */}
          {errorMsg && (
            <div className="w-full mb-4 p-3 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5 text-left text-xs text-red-600 font-semibold">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Social Logins */}
          <div className="w-full flex flex-col gap-3 mb-6">
            <button 
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full bg-white text-gray-900 font-bold py-2.5 px-4 border border-gray-200/90 rounded-2xl shadow-sm hover:shadow-md hover:bg-gray-50 transition-all flex items-center justify-center gap-3 text-xs sm:text-sm cursor-pointer disabled:opacity-50"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Continue with Google</span>
            </button>
            <button 
              onClick={handleGithubLogin}
              disabled={isLoading}
              className="w-full bg-[#24292e] text-white font-bold py-2.5 px-4 border border-transparent rounded-2xl shadow-sm hover:shadow-md hover:bg-[#1b1f23] transition-all flex items-center justify-center gap-3 text-xs sm:text-sm cursor-pointer disabled:opacity-50"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              <span>Continue with GitHub</span>
            </button>
          </div>

          {/* Guest / Demo Option */}
          <div className="w-full mt-4 pt-4 border-t border-gray-100 flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={handleGuestLogin}
              disabled={isLoading}
              className="text-xs font-bold text-gray-600 hover:text-blue-600 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-blue-500" />
              <span>Explore as Guest without signing up</span>
            </button>
          </div>
          
          <p className="mt-6 text-[10px] text-gray-400 font-medium">
            By continuing, you agree to our Terms of Service & Privacy Policy.
          </p>
        </LiquidGlass>
      </main>
    </div>
  );
}
