import React from "react";
import CourseAssignment from "../CourseAssignment/CourseAssignment";
import AddAssignmentForm from "../AddAssignmentForm/AddAssignmentForm";
import "./CourseCard.scss"

const CoursesCard = (props) => {

    const componentName = "course-card";
    const assignmentsContainerName = `${componentName}__assignments-container`;

    const { course } = props;

    return (
        <div className={componentName}>
            <h1>Course: {course.title.toUpperCase()}</h1>
            <h2>Teacher: {course.teacher}</h2>
            <h2>Grade: {course.grade}</h2>
            <div className={assignmentsContainerName}>
                { course.assignments && <h3>Assignments</h3> }
                { course.assignments && (
                    course.assignments.map((assignment, index) => {
                        return (
                            <CourseAssignment 
                                key={index} 
                                title={assignment.title} 
                                percentage={assignment.percentage} 
                            />
                        )
                    })
                )
                }
            </div>
            <AddAssignmentForm 
                course={course}
            />
        </div>
    )
}

export default CoursesCard;