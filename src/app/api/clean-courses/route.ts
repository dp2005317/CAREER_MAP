import { NextResponse } from 'next/server';
import { db } from '@/database/config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, "courses"));
    const courses = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as any }));
    
    let deleted = [];
    
    for (const c of courses) {
      if (c.title?.toLowerCase().includes("git") || c.id?.toLowerCase().includes("git")) {
        if (c.id !== "git-and-github") {
           await deleteDoc(doc(db, "courses", c.id));
           deleted.push(c.id);
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: `Cleaned up old git courses.`,
      deleted,
      remainingCourses: courses.map(c => c.id).filter(id => !deleted.includes(id))
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
