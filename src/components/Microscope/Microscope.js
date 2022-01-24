import React from 'react';
import Webcam from "react-webcam";
import "./Microscope.scss"

const Microscope = () => {
    return (
        <div className="microscope">
            <h2>Webcam</h2>
            <Webcam/>
        </div>
    );
};

export default Microscope;
