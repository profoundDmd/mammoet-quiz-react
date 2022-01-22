import React from 'react';
import Webcam from "react-webcam";
import "./Microscope.scss"

const Microscope = () => {
    return (
        <div className="microscope">
            <Webcam/>
        </div>
    );
};

export default Microscope;
