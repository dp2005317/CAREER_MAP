import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || ""
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function cleanup() {
  const querySnapshot = await getDocs(collection(db, "courses"));
  let gitCourses: any[] = [];
  
  querySnapshot.forEach((docSnap) => {
    const data = docSnap.data();
    if (data.title && data.title.includes("Git") && data.title.includes("GitHub")) {
      gitCourses.push({ id: docSnap.id, ...data });
    }
  });

  console.log(`Found ${gitCourses.length} Git courses`);

  if (gitCourses.length > 1) {
    const toDelete = gitCourses.filter(c => c.id !== "git-and-github");
    
    if (toDelete.length === gitCourses.length) {
      toDelete.pop();
    }

    for (const c of toDelete) {
      console.log(`Deleting duplicate course with id: ${c.id}`);
      await deleteDoc(doc(db, "courses", c.id));
    }
    console.log("Cleanup complete!");
  } else {
    console.log("No duplicates found.");
  }
}

cleanup().catch(console.error);
