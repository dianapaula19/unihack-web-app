import React from "react";
import "./Button.scss"

const Button = (props) => {

    const componentName = "unihack-button";

    const {label, onCLick} = props;
    
    return (
        <button 
            className={componentName}
            onClick={onCLick}
        >
            {label}
        </button>
    )
}

export default Button;