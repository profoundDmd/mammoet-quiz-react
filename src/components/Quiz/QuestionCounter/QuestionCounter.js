import React, {useState} from 'react';
import {motion} from "framer-motion";
import "./QuestionCounter.scss"

const QuestionCounter = ({showQuestionCounter, questions, setQuizPropsSetupDone, currentQuestion}) => {
    const variants = {
        hidden: {scale: 0},
        show: {
            scale: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { scale: 0 },
        show: { scale: 1 }
    }

    const onAnimationComplete = () => {
        setQuizPropsSetupDone(isDone => !isDone);
    }

    return (
        <>
            {showQuestionCounter && (
            <div className="questionCounter">
                <motion.ul
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    onAnimationComplete={onAnimationComplete}
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
