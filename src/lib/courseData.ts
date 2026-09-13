import { db } from "@/database/config";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { Course, Lecture } from "@/data/types";

export const getCourse = async (courseId: string): Promise<Course | null> => {
  try {
    const docRef = doc(db, "courses", courseId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as Course;
    }
    return null;
  } catch (error) {
    console.error("Error fetching course:", error);
    return null;
  }
};

export const getAllCourses = async (): Promise<Course[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "courses"));
    return querySnapshot.docs.map(doc => doc.data() as Course);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

export const getLecture = async (courseId: string, lectureId: string): Promise<{lecture: Lecture, moduleId: string, course: Course} | null> => {
  try {
    const course = await getCourse(courseId);
    if (!course) return null;

    for (const module of course.modules) {
        const lecture = module.lectures.find(l => l.lectureId === lectureId);
        if (lecture) {
            return { lecture, moduleId: module.moduleId, course };
        }
    }
    return null;
  } catch (error) {
    console.error("Error fetching lecture:", error);
    return null;
  }
};

export const saveAssessmentResult = async (userId: string, courseId: string, lectureId: string, resultData: any) => {
  try {
    const resultRef = doc(db, "users", userId, "assessments", lectureId);
    await setDoc(resultRef, {
      courseId,
      lectureId,
      ...resultData,
      completedAt: new Date().toISOString()
    }, { merge: true });
  } catch (error) {
    console.error("Error saving assessment result:", error);
  }
};

export const getAssessmentResult = async (userId: string, lectureId: string): Promise<any | null> => {
  try {
    const resultRef = doc(db, "users", userId, "assessments", lectureId);
    const docSnap = await getDoc(resultRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  } catch (error) {
    console.error("Error fetching assessment result:", error);
    return null;
  }
}
