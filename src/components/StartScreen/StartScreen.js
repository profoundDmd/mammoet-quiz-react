import React, {useState} from 'react';
import MainTitle from "../MainTitle/MainTitle";
import Button from "../Button/Button";
import "./StartScreen.scss";
import {animated } from 'react-spring'

const StartScreen = ({bgMusic, startScreenProps, setStartScreenOnScreen, setMainMenuOnScreen}) => {
    const startQuizPressed = () => {
        bgMusic.play();

        setStartScreenOnScreen(startScreenOnScreen => !startScreenOnScreen);
        setTimeout(() => {
            setMainMenuOnScreen(mainMenuOnScreen => !mainMenuOnScreen);
        }, 1000);
    }

    return (
        <animated.div className="startScreen" style={startScreenProps}>
            <div className="startContent">
                <MainTitle/>
                <Button text="START" type="stone" clickEvent={startQuizPressed}/>
            </div>
        </animated.div>
    );
};

export default StartScreen;
