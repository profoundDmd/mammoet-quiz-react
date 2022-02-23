import React from 'react';

const Answer = ({id, answer, isCorrect}) => {
    return (
        <div key={`answer_${id}`} className="answer">
            <div>${answer}</div>
            <div>${isCorrect}</div>
        </div>
    );
};

export default Answer;
