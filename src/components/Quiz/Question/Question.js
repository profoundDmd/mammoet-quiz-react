import React, {useState} from 'react';
import "./Question.scss";
import YouTube from "react-youtube";
import {AnimatePresence} from "framer-motion";

const Question = ({question, setCurrentQuestion}) => {

    const [askQuestion, setAskQuestion] = useState(false);

    const opts = {height: '390', width: '640', playerVars: {autoplay: 1,}, origin: 'http://localhost:3000',};

    const onYtIntroReady = () => {

    }

    const onYtIntroEnd = () => {

    }

    const onYtIntroExitComplete = () => {

    }

    const nextQuestion = () => {
        setCurrentQuestion(cq => {
            return ++cq;
        });
    }

    return (
        <div className="question">
            <AnimatePresence onExitComplete={onYtIntroExitComplete}>
                <div className="modalBg" />
                <YouTube
                    videoId="452kpneADrA"
                    opts={opts}
                    onReady={onYtIntroReady}
                    onEnd={onYtIntroEnd}
                    className="youtubeVid"/>
            </AnimatePresence>

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

            <button onClick={nextQuestion}> klik</button>
        </div>
    );
};

export default Question;
