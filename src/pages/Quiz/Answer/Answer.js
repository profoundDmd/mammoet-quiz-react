import React, {useEffect, useState} from 'react';
import "./Answer.scss";

const Answer = ({id, answer, isCorrect, setIsQuestionAnswered, isQuestionAnswered, setScore, setThrowConfetti}) => {
    const [flipClass, setFlipClass] = useState("");
    const item = {hidden: { scale: 0 }, show: { scale: 1 }}

    useEffect(() => {
        if(isQuestionAnswered && isCorrect){ flip();}
    },[isQuestionAnswered])

    const onClick = () => {
        setIsQuestionAnswered(true);
        if(isCorrect){
            setScore(score => ++score);
            setThrowConfetti(true);
        }
        else{}
    }

    const backside = () => {
        if(isCorrect){return <div>Joepi, het goede antwoord!</div>}
        return <div>Helaas, fout antwoord</div>
    }

    const flip = () => {
        setFlipClass("flip");
    }

    return (
        <div key={`answer_${id}`} className="answer" onClick={onClick} variants={item}>
            <div className={`frontside ${flipClass} ${isQuestionAnswered? "answered" :""}`} onClick={flip}>
                <div>{answer}</div>
            </div>
            <div className={`backside ${flipClass} ${isCorrect? "correctAnswer" : "wrongAnswer"}`} >
                {backside()}
            </div>
        </div>
    );
};

export default Answer;
