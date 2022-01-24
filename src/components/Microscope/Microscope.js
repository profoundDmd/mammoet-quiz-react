import React from 'react';
import Webcam from "react-webcam";
import "./Microscope.scss"
import {animated } from 'react-spring'

const Microscope = ({microscopeProps, setMicroscopeOnScreen, setMainMenuOnScreen}) => {
    return (
        <animated.div style={microscopeProps} className="microscope">
            <h2>Webcam</h2>
            <Webcam/>
        </animated.div>
    );
};

export default Microscope;
