<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import AddCourseForm from "../../molecules/AddCourseForm/AddCourseForm";
=======
import React from "react";
import Button from "../../atoms/Button/Button";
>>>>>>> 505f25f9f0e828c65491fa7e3a56cb87f76a3028
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