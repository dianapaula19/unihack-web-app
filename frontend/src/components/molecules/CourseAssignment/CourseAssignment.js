import React from "react";
import Text from "../../atoms/Text/Text";
import "./CourseAssignment.scss"

const CourseAssignment = (props) => {

    const componentName = "course-assignment";

    const {title, percentage, onClick} = props
    
    return (
        <div className={componentName}>
            <Text text={title}/>
            <Text text={percentage} />
            <button onClick={onClick}>Remove</button>
        </div>
    )
}

export default CourseAssignment;