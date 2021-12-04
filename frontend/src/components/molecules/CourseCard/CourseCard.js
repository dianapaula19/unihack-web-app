import React from "react";
import CourseAssignment from "../../atoms/Button/CourseAssignemt/CourseAssignments";
import "./CourseCard.scss"

const CoursesCard = (props) => {

    const componentName = "course-card";

    const {title, teacher, grade} = props
    return (
        <div className={componentName}>
            <h1>{title}</h1>
            <h3>{teacher}</h3>
            <h2>{grade}</h2>
            <CourseAssignment title="Project" percentage="20%"/>
        </div>
    )
}

export default CoursesCard;