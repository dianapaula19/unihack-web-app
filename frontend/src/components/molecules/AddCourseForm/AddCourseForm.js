import React, {useState} from "react";
import store from "store";
import Input from "../../atoms/Input/Input";
import "./AddCourseForm.scss";

const AddCourseForm = () => {

    const componentName = "unihack-add-course-form";
    const addButtonName = `${componentName}__button`;

    const [dataCourse, setDataCourse] = useState({
        courseTitle: '',
        courseTeacher: '',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        setDataCourse({
            ...dataCourse,
            [name]: value
        });

    }

    const addCourse = () => {
        console.log("here");
        const data = {
            teacher: dataCourse.courseTeacher,
            grade: 'N/A',
            assignments: []
        };
        store.set(dataCourse.courseTitle, data);
        window.location.reload();

    }
    
    return (
        <div className={componentName}>
            <h1>Add a new course</h1>
            <Input
                id={`${componentName}-title`}
                name="courseTitle"
                type="text"
                placeholder="Course"
                value={dataCourse.courseTitle}
                onChange={handleChange}    
            />
            <Input
                id={`${componentName}-teacher`}
                name="courseTeacher"
                type="text"
                placeholder="Teacher"
                value={dataCourse.courseTeacher}
                onChange={handleChange}    
            />
            <button
                onClick={addCourse}
                className={addButtonName} 
            >
                Add
            </button>
        </div>
    )
}

export default AddCourseForm;