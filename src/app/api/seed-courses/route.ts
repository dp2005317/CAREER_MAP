import { NextResponse } from 'next/server';
import { db } from '@/database/config';
import { doc, setDoc } from 'firebase/firestore';
import { dsaCourseData } from '@/data/courses/dsaCourse';
import { mlCourseData } from '@/data/courses/mlCourse';
import { dataAnalyticsCourseData } from '@/data/courses/dataAnalyticsCourse';
import { mernCourseData } from '@/data/courses/mernCourse';
import { linuxCourseData } from '@/data/courses/linuxCourse';
import { dataScienceCourseData } from '@/data/courses/dataScienceCourse';
import { gitCourseData } from '@/data/courses/gitCourse';

export async function GET() {
  try {
    const allCourses = [
      dsaCourseData,
      mlCourseData,
      dataAnalyticsCourseData,
      mernCourseData,
      linuxCourseData,
      dataScienceCourseData,
      gitCourseData,
    ];

    for (const course of allCourses) {
      await setDoc(doc(db, "courses", course.courseId), course);
    }

    return NextResponse.json({
      success: true,
      message: `Successfully seeded all ${allCourses.length} courses with full playlist lectures and 10 questions each into Firestore!`,
      courses: allCourses.map(c => ({
        id: c.courseId,
        title: c.title,
        category: c.category,
        company: c.company,
        thumbnail: c.thumbnail,
        modulesCount: c.modules.length,
        lecturesCount: c.modules.reduce((acc, m) => acc + m.lectures.length, 0)
      }))
    });
  } catch (error: any) {
    console.error("Error seeding courses:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
