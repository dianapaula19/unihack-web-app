import React from "react";
import "./CourseAssignment.scss"

const CourseAssignment = (props) => {

    const componentName = "course-assignment";

    const {title, percentage} = props
    
    return (
        <div className={componentName}>
            <h3>{title}</h3>
            <h3>{percentage}</h3>
        </div>
    )
}

export default CourseAssignment;