import React from "react";
import "./Button.scss"

const Button = (props) => {

    const componentName = "button";

    const {label} = props
    
    return (
        <button className={componentName}>
            {label}
        </button>
    )
}

export default Button;