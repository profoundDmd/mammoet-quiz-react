import React, {useState} from 'react';
import "./Question.scss";

const Question = ({question, setCurrentQuestion}) => {

    const click = () => {
        setCurrentQuestion(cq => {
            console.log(cq);
            return ++cq;
        });
    }

    return (
        <>
            <div className="question">
                {question.question}
                {
                    question.answers.map(
                        answer => { return(
                            <div key={`answer_${answer.id}`}>
                                <div>${answer.answer}</div>
                                <div>${answer.isCorrect}</div>
                            </div>
                        )}
                    )
                }

                <button onClick={click}> klik</button>
            </div>
        </>
    );
};

export default Question;
