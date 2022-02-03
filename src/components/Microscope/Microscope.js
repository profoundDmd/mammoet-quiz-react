import React from 'react';
import Webcam from "react-webcam";
import "./Microscope.scss"
import {animated } from 'react-spring'
import Button from "../Button/Button";

const Microscope = () => {
    const goToMainMenu = () => {
    }

    return (
        <animated.div className="microscope">
            <Webcam className="microscopeCam"/>
            <Button text="Terug" type="stone" clickEvent={goToMainMenu} />
        </animated.div>
    );
};

export default Microscope;
