import React from 'react';
import Webcam from "react-webcam";
import "./Microscope.scss"
import {animated } from 'react-spring'
import Button from "../Button/Button";

const Microscope = ({microscopeProps, setMicroscopeOnScreen, setMainMenuOnScreen}) => {
    const show = false;

    const goToMainMenu = () => {
        setMicroscopeOnScreen(microscopeOnScreen => !microscopeOnScreen);
        setTimeout(() => {
            setMainMenuOnScreen(startScreenOnScreen => !startScreenOnScreen);
        }, 1000);
    }

    return (
        <animated.div style={microscopeProps} className="microscope">
            <Button text="Terug" type="stone" clickEvent={goToMainMenu} />
        </animated.div>
    );
};

export default Microscope;
