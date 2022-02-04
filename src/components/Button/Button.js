import React from 'react';
import './Button.scss'
import stoneClick from '../../assets/sounds/stoneButtonClick.mp3'
import woodClick from '../../assets/sounds/woodButtonClick.mp3'
import {motion} from "framer-motion";

const Button = ({text, type, clickEvent, className}) => {
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

    const onTapStart = () => {
        playSound();
    }

    const onTap = () => {
        clickEvent();
    }

    return (
        <motion.button onTapStart={onTapStart} whileTap={{ scale: 0.95 }} onTap={onTap} className={"mainButton " + className + " " + buttonType()}>
            {text}
        </motion.button>
    );
};

export default Button;
