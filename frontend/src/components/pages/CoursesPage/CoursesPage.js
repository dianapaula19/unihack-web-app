import React from "react";
import CoursesCard from "../../molecules/CourseCard/CourseCard";
import "./CoursesPage.scss";


const CoursesPage = () => {
    const componentName = "courses-page";
    const courses = [
        {
            title: 'Math',
            teacher: 'Mr. Smith',
            grade: '9.33'
        },
        {
            title: 'French',
            teacher: 'Mrs. De Beauvoir',
            grade: '9.54'
        },
        {
            title: 'Physics',
            teacher: 'Mr. Einstein',
            grade: '9.46'
        }
    ];
    return (
        <div className={componentName}>
            {
            courses.map((course) => {
                return (
                    <CoursesCard title={course.title} teacher={course.teacher} grade={course.grade}/> 
                );
            }
            )}
        </div>
    )
}

export default CoursesPage;