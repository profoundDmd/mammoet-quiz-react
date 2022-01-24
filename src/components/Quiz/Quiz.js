import React from 'react';
import "./Quiz.scss";
import {animated } from 'react-spring'

const Quiz = ({quizProps, setMainMenuOnScreen, setQuizOnScreen}) => {
    return (
        <animated.div style={quizProps} className="quiz">
            <h2>Quiz</h2>
        </animated.div>
    );
};

export default Quiz;
