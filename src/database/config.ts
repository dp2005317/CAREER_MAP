import { initializeApp, getApps, getApp } from "firebase/app";
import { 
  getAuth, 
  initializeAuth, 
  indexedDBLocalPersistence, 
  browserLocalPersistence, 
  browserSessionPersistence, 
  inMemoryPersistence,
  browserPopupRedirectResolver,
  Auth
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const clean = (val: string | undefined, fallback: string = "") => {
  const cleaned = (val || "").trim().replace(/[\r\n"']/g, "");
  return cleaned || fallback;
};

const firebaseConfig = {
  apiKey: clean(process.env.NEXT_PUBLIC_FIREBASE_API_KEY, "mock_firebase_api_key"),
  authDomain: clean(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, "career-map-ai.firebaseapp.com"),
  projectId: clean(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID, "career-map-ai"),
  storageBucket: clean(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET, "career-map-ai.firebasestorage.app"),
  messagingSenderId: clean(process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID, "123456789012"),
  appId: clean(process.env.NEXT_PUBLIC_FIREBASE_APP_ID, "1:123456789012:web:abcdef1234567890")
};

// Initialize Firebase only if it hasn't been initialized yet
let app: ReturnType<typeof initializeApp>;
try {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
} catch (e) {
  console.warn("Firebase initialization warning:", e);
  app = (getApps()[0] || {}) as any;
}

let auth: Auth;

if (typeof window !== "undefined") {
  try {
    // Prioritize browserLocalPersistence (localStorage) to avoid IndexedDB "database is closing/hidden" race conditions on mobile/tab-switch
    auth = initializeAuth(app, {
      persistence: [
        browserLocalPersistence,
        indexedDBLocalPersistence,
        browserSessionPersistence, 
        inMemoryPersistence
      ],
      popupRedirectResolver: browserPopupRedirectResolver,
    });
  } catch (e) {
    try {
      auth = getAuth(app); // Fallback to getAuth if initializeAuth has already been called
    } catch {
      auth = {} as Auth;
    }
  }
} else {
  try {
    auth = getAuth(app);
  } catch {
    auth = {} as Auth;
  }
}

let db: ReturnType<typeof getFirestore>;
try {
  db = getFirestore(app);
} catch {
  db = {} as any;
}

let storage: ReturnType<typeof getStorage>;
try {
  storage = getStorage(app);
} catch {
  storage = {} as any;
}

export { app, auth, db, storage };
