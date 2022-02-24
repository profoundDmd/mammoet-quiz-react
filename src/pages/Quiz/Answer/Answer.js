import React from 'react';

const Answer = ({id, answer, isCorrect}) => {
    const onClick = () => {
        if(isCorrect){}
        else{}
    }

    const back = () => {
        if(isCorrect){return <div>Joepi, het goede antwoord!</div>}
        return <div>Helaas, fout antwoord</div>
    }

    return (
        <div key={`answer_${id}`} className="answer" onClick={onClick}>
            <div className="front">
                <div>${answer}</div>
            </div>
            <div className="back">
                {back}
            </div>

            <div>${isCorrect}</div>
        </div>
    );
};

export default Answer;
