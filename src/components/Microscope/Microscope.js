import React from 'react';
import Webcam from "react-webcam";
import "./Microscope.scss"
import {animated } from 'react-spring'
import Button from "../Button/Button";

const Microscope = ({style, setMicroscopeOnScreen, setMainMenuOnScreen}) => {
    const goToMainMenu = () => {
        setMicroscopeOnScreen(false);
        setTimeout(() => {
            setMainMenuOnScreen(mainMenuOnScreen => !mainMenuOnScreen);
        }, 1200);
    }

    return (
        <animated.div style={style} className="microscope">
            <Webcam className="microscopeCam"/>
            <Button text="Terug" type="stone" clickEvent={goToMainMenu} />
        </animated.div>
    );
};

export default Microscope;
