import React from 'react';
import './Button.scss'
import stoneClick from './../../assets/sounds/stone-button-click.mp3'
import woodClick from './../../assets/sounds/wood-button-click.mp3'

const Button = ({text, type, clickEvent}) => {
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
                new Audio (stoneClick).play();
                break;
            case "wood":
                new Audio (woodClick).play();
                break;
            default :
                console.log("no audio for this");
        }
    }

    return (
        <button className={"mainButton " + buttonType()} onClick={ () => {
            playSound();
            clickEvent();
        }}>
            {text}
        </button>
    );
};

export default Button;
