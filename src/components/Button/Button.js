import React from 'react';
import './Button.scss'
import stoneClick from '../../assets/sounds/stoneButtonClick.mp3'
import woodClick from '../../assets/sounds/woodButtonClick.mp3'
import {Link} from "react-router-dom";

const Button = ({text, type, isLink, clickEvent}) => {
    const buttonType = () => {
        switch (type){
            case "stone":
                return "stone";
            case "wood" :
                return "wood";
            default:
                console.log("no buttonType for this");
                return "";
        }
    };

    const playSound = () => {
        switch (type){
            case "stone":
                new Audio(stoneClick).play();
                break;
            case "wood":
                new Audio(woodClick).play();
                break;
            default :
                console.log("no audio for this");
        }
    }

    return (
        <>
        {isLink
            ? <button className={"mainButton " + buttonType()} onMouseDown={ () => {playSound();clickEvent();}}>{text}</button>
            : <Link className={"mainButton " + buttonType()} onMouseDown={ () => {playSound();clickEvent();}}>{text}</Link>
        }
        </>
    );
};

export default Button;
