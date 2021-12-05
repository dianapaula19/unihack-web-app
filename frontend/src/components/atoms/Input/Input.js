import React from "react";
import "./Input.scss"

const Input = (props) => {

    const componentName = "unihack-input";

    const {id, name, type, placeholder, value, onChange} = props
    
    return (
        <input 
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={componentName}
        />
    )
}

export default Input;