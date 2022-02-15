import React, {useState} from 'react';
import {motion} from "framer-motion";
import "./QuestionCounter.scss"

const QuestionCounter = ({showQuestionCounter, questions, currentQuestion}) => {
    const variants = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return (
        <>
            {showQuestionCounter && (
            <div className="questionCounter">
                <motion.ul
                    variants={variants}
                    initial="hidden"
                    animate="show"
                >
                    {
                        questions.map(question => (
                            <motion.li
                                key={question.id}
                                className="counter"
                                variants={item}
                            >
                                {question.id}
                            </motion.li>
                        ))
                    }
                </motion.ul>
            </div>
            )}
        </>
    );
};

export default QuestionCounter;
