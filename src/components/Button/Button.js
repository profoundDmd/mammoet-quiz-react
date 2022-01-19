import React from 'react';
import './Button.scss'

const Button = ({text, type, clickEvent}) => {
    const buttonType = () => {
        if(type === "stone"){
            return "stone";
        }else if(type === "wood"){
            return "wood";
        }else{
            return "";
        }
    };

    return (
        <button className={"mainButton " + buttonType()} onClick={clickEvent}>
            {text}
        </button>
    );
};

export default Button;
