import React from "react";
import "./Text.scss"

const Text = (props) => {

    const componentName = "unihack-text";

    const {text} = props;
    
    return (
        <div className={componentName}>
            {text}   
        </div>
    )
}

export default Text;