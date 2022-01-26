import React from 'react';
import "./Quiz.scss";
import {animated } from 'react-spring'

const Quiz = ({quizSpringProps, setMainMenuOnScreen, setQuizOnScreen}) => {
    return (
        <animated.div style={quizSpringProps} className="quiz">
            <h2>Quiz</h2>
        </animated.div>
    );
};

export default Quiz;
