import React, { useEffect, useState } from "react";
import AddCourseForm from "../../molecules/AddCourseForm/AddCourseForm";
import CoursesCard from "../../molecules/CourseCard/CourseCard";
import "./CoursesPage.scss";


const CoursesPage = () => {
    const componentName = "courses-page";
    const [courses, setCourses] = useState(null);
    
    useEffect(() => {
        if (!courses) {
            const newCourses = Object.entries(localStorage);
            console.log(newCourses);
            setCourses(newCourses)
        }
    }, [setCourses, courses])
    return (
        <div className={componentName}>
            <h1>Grade Calculator</h1>
            <h3>When you know you failed, but you just wanna make sure</h3>
            { courses && (
                    courses.map((course, index) => {
                        console.log(course);
                        return (
                            <CoursesCard key={index} course={JSON.parse(course[1])}/> 
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