import React from 'react';
import "./Quiz.scss";
import {animated } from 'react-spring';
import YouTube from 'react-youtube';

const Quiz = ({quizSpringProps, setMainMenuOnScreen, setQuizOnScreen}) => {
    const opts = {
        height: '390', width: '640', playerVars: {autoplay: 1,}, origin: 'http://localhost:3000',
    };

    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    return (
        <animated.div style={quizSpringProps} className="quiz">
            <h2>Quiz</h2>
            <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onReady} />;
        </animated.div>
    );


};

export default Quiz;
