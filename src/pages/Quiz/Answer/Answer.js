import React, {useEffect, useState} from 'react';
import "./Answer.scss";
import popWoodAudio from "../../../assets/sounds/popWood.mp3";
import wrongAnswerAudio from "../../../assets/sounds/wrongAnswer.mp3";
import startQuizAudio from "../../../assets/sounds/startQuiz.mp3";

const Answer = ({id, answer, isCorrect, setIsQuestionAnswered, isQuestionAnswered, setScore, setThrowConfetti}) => {
    const [flipClass, setFlipClass] = useState("");
    const item = {hidden: { scale: 0 }, show: { scale: 1 }}

    const onClick = () => {
        if(isCorrect && !isQuestionAnswered){
            setScore(score => ++score);
            setThrowConfetti(true);
            new Audio(startQuizAudio).play();
        }else if(!isCorrect && !isQuestionAnswered){
            new Audio(wrongAnswerAudio).play();
        }
        setIsQuestionAnswered(true);
    }

    const backside = () => {
        if(isCorrect){return <div>Correct!</div>}
        return <div>Helaas, fout antwoord</div>
    }

    const flip = () => {
        setFlipClass("flip");
    }

    useEffect(() => {
        new Audio(popWoodAudio).play();
    }, []);


    return (
        <div key={`answer_${id}`} className="answer" onClick={onClick} variants={item}>
            <div className={`frontside ${flipClass} ${isQuestionAnswered? isCorrect? "correctAnswer" : "answered" :""}`} onClick={flip}>
                <div>{answer}</div>
            </div>
            <div className={`backside ${flipClass} ${isCorrect? "correctAnswer" : "wrongAnswer"}`} >
                {backside()}
            </div>
        </div>
    );
};

export default Answer;
