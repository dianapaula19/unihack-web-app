import React, { useEffect, useState } from "react";
import AddCourseForm from "../../molecules/AddCourseForm/AddCourseForm";
import CoursesCard from "../../molecules/CourseCard/CourseCard";
import "./CoursesPage.scss";


const CoursesPage = () => {
    const componentName = "courses-page";
    const [courses, setCourses] = useState(null);
    
    useEffect(() => {
        if (!courses) {
            const newCourses = Object.keys(localStorage)
            setCourses(newCourses)
        }
    }, [setCourses, courses])
    return (
        <div className={componentName}>
            { courses && (
                    courses.map((course) => {
                        return (
                            <CoursesCard course={course}/> 
                        );
                        }
                    )
                )
            }
            <AddCourseForm />
        </div>
    )
}

export default CoursesPage;