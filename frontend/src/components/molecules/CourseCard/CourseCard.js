import React, {useState, useEffect} from "react";
import store from "store";
import CourseAssignment from "../CourseAssignment/CourseAssignment";
import AddAssignmentForm from "../AddAssignmentForm/AddAssignmentForm";
import "./CourseCard.scss"

const nullConst = "NULL"

const CoursesCard = (props) => {

    const componentName = "course-card";
    const assignmentsContainerName = `${componentName}__assignments-container`;

    const [dataCourse, setDataCourse] = useState({
        teacher: null,
        grade: null,
        assignments: null
    })

    const {course} = props;
    
    useEffect(() => {
        if (!dataCourse.teacher
            || !dataCourse.grade 
            || !dataCourse.assignments
        ) {
            const data = store.get(course, {
                teacher: nullConst,
                grade: nullConst,
                assignments: []
            });
            setDataCourse(data);
        }
    }, [course, dataCourse.assignments, dataCourse.grade, dataCourse.teacher])
    


    const removeAssignment = (index) => {
        console.log(index);
        const newAssignments = dataCourse.assignments.filter((a, idx) => idx !== index);
        console.log(newAssignments);
        setDataCourse({
            ...dataCourse,
            assignments: newAssignments
        });
        store.set(course, {
            teacher: dataCourse.teacher,
            grade: dataCourse.grade,
            assignments: dataCourse.assignments
        });
    }

    return (
        <div className={componentName}>
            <h1>Course: {course.toUpperCase()}</h1>
            <h2>Teacher: {dataCourse.teacher}</h2>
            <h2>Grade: {dataCourse.grade}</h2>
            <div className={assignmentsContainerName}>
                {dataCourse.assignments && <h3>Assignments</h3>}
                { dataCourse.assignments && (
                    dataCourse.assignments.map((assignment, index) => {
                        console.log(assignment);
                        return (
                            <CourseAssignment 
                                key={index} 
                                title={assignment.title} 
                                percentage={assignment.percentage} 
                                onClick={removeAssignment(index)}
                            />
                        )
                    })
                )
                }
            </div>
            <AddAssignmentForm 
                course={course}
                teacher={dataCourse.teacher}
                grade={dataCourse.grade}
            />
        </div>
    )
}

export default CoursesCard;