import React from 'react';
import {motion} from "framer-motion";
import "./QuestionCounter.scss"

const QuestionCounter = ({questions, currentQuestion}) => {
    return (
        <div className="questionCounter">
            <motion.ul>
                {
                    questions.map(question => (
                        <li key={question.id} className="counter">
                            {question.id}
                        </li>
                    ))
                }
            </motion.ul>

        </div>
    );
};

export default QuestionCounter;
