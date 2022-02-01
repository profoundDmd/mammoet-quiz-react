import React, {useState} from 'react';
import "./Quiz.scss";
import {animated } from 'react-spring';
import YouTube from 'react-youtube';

const Quiz = ({style, setQuizOnScreen, setMainMenuOnScreen}) => {
    const opts = {
        height: '390', width: '640', playerVars: {autoplay: 1,}, origin: 'http://localhost:3000',
    };
    const [wallPaintingBackground, setWallPaintingBackground] = useState("wallPainting");

    const onReady = (event) => {
        setWallPaintingBackground("");
    }

    const onEnd = (event) => {
        console.log("end");
    }

    return (
        <animated.div style={style} className={`quiz ${wallPaintingBackground}`}>
            <img src="" />
            <h2>Quiz</h2>
            <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onReady} onEnd={onEnd}/>;
        </animated.div>
    );
};

export default Quiz;
