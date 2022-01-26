import React from 'react';
import Webcam from "react-webcam";
import "./Microscope.scss"
import {animated } from 'react-spring'
import Button from "../Button/Button";

const Microscope = ({microscopeSpringProps, setMicroscopeOnScreen, setMainMenuOnScreen}) => {
    const show = false;

    const goToMainMenu = () => {
        setMicroscopeOnScreen(microscopeOnScreen => !microscopeOnScreen);
        setTimeout(() => {
            setMainMenuOnScreen(startScreenOnScreen => !startScreenOnScreen);
        }, 1000);
    }

    return (
        <animated.div style={microscopeSpringProps} className="microscope">
            <Button text="Terug" type="stone" clickEvent={goToMainMenu} />
        </animated.div>
    );
};

export default Microscope;
