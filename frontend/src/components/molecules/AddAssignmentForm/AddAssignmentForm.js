import React, { useState } from "react";
import store from "store";
import "./AddAssignmentForm.scss"
import Input from "../../atoms/Input/Input";


const AddAssignmentForm = (props) => {

    const componentName = "add-assignment-form";
    const addButtonName = `${componentName}__button--add`;
    const resetButtonName = `${componentName}__button--reset`;
    const [dataAssignment, setDataAssignment] = useState({
        assignmentTitle: '',
        assignmentPercentage: ''
    })

    const { course, teacher, grade } = props;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setDataAssignment({
            ...dataAssignment,
            [name]: value
        })
    }

    const addAssignment = () => {
        console.log("Adding an assignment")
        const data = store.get(course, null);
        console.log(data);
        if (!data) {
            return
        }
        let assignments = data.assignments;
        assignments.push({
            title: dataAssignment.assignmentTitle,
            percentage: dataAssignment.assignmentPercentage
        })
        const newAssignments = assignments;
        console.log(newAssignments);
        store.set(course, {
            teacher: teacher,
            grade: grade,
            assignments: newAssignments
        });
        window.location.reload();
        
    }

    const resetAssignment = () => {
        document.getElementById(`${componentName}-title`).value = "";
        document.getElementById(`${componentName}-percentage`).value = "";
        setDataAssignment({
            assignmentTitle: '',
            assignmentPercentage: ''
        })
    }
    
    return (
        <div className={componentName}>
            <Input
                id={`${componentName}-title`}
                name="assignmentTitle"
                placeholder="Title"
                type="text"
                value={dataAssignment.title}
                onChange={handleChange}    
            />
            <Input
                id={`${componentName}-percentage`}
                name="assignmentPercentage"
                placeholder="Percentage"
                type="number"
                value={dataAssignment.percentage}
                onChange={handleChange}    
            />
            <button
                onClick={addAssignment} 
                className={addButtonName}
            >
                Add
            </button>
            <button
                onClick={resetAssignment} 
                className={resetButtonName}
            >
                Reset
            </button>
            
        </div>
    )
}

export default AddAssignmentForm;