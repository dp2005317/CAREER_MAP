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
  apiKey: clean(process.env.NEXT_PUBLIC_FIREBASE_API_KEY, "AIzaSyA1pOYM0fYxcMCIbevKpt_Q_-OWSdBknoM"),
  authDomain: clean(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, "career-map-ai-dp2608.firebaseapp.com"),
  projectId: clean(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID, "career-map-ai-dp2608"),
  storageBucket: clean(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET, "career-map-ai-dp2608.firebasestorage.app"),
  messagingSenderId: clean(process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID, "881276085328"),
  appId: clean(process.env.NEXT_PUBLIC_FIREBASE_APP_ID, "1:881276085328:web:b346cf7fb08532d8529d55")
};

// Initialize Firebase only if it hasn't been initialized yet
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

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
    auth = getAuth(app); // Fallback to getAuth if initializeAuth has already been called
  }
} else {
  auth = getAuth(app);
}

const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
