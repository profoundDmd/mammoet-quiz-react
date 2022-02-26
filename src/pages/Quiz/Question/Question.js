import React, {useState} from 'react';
import "./Question.scss";
import YouTube from "react-youtube";
import {AnimatePresence, motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import Answer from "../Answer/Answer";

const Question = ({question, setCurrentQuestion, setStopButtonDisabledClass}) => {

    const [showYoutubeVid, setShowYoutubeVid] = useState(true);
    const [showQuestion, setShowQuestion] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);
    const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
    const [animateAmountToTop, setAnimateAmountToTop] = useState();

    const opts = {height: '390', width: '640', playerVars: {autoplay: 1,}, origin: 'http://localhost:3000',};

    const onYtIntroReady = () => {

    }

    const onYtIntroEnd = () => {
        setShowYoutubeVid(false);
    }

    const onYtIntroExitComplete = () => {
        setShowQuestion(true);
    }

    const nextQuestion = () => {
        setCurrentQuestion(cq => {
            return ++cq;
        });
    }

    const textDone = () => {
        setAnimateAmountToTop(-180);
        //setShowAnswers(true);
    }

    const questionTextAnimation = () => {
        setShowAnswers(true);
        setStopButtonDisabledClass("");
    }

    return (
        <div className="question">
            <AnimatePresence onExitComplete={onYtIntroExitComplete}>
                {showYoutubeVid && (
                    <motion.div className="ytIntro" exit={{ opacity: 0, transition: {duration: 2.5} }}>
                        <div className="modalBg" />
                        <YouTube
                            videoId="452kpneADrA"
                            opts={opts}
                            onReady={onYtIntroReady}
                            onEnd={onYtIntroEnd}
                            className="youtubeVid"/>
                    </motion.div>
                )}
            </AnimatePresence>

            {showQuestion && (
                <motion.div
                    className="questionText"
                    animate={{ y: animateAmountToTop, transition: {duration: .5}}}
                    onAnimationComplete={questionTextAnimation}
                >
                    <Typewriter
                        options={{delay: 65, cursor: " "}}
                        onInit={(typewriter) => {
                            typewriter.typeString(question.question).callFunction(textDone).start();
                        }}
                    />
                </motion.div>
            )}

            <div className="answers">
                {showAnswers && (
                    question.answers.map(
                        answer => { return(
                            <Answer {...answer} setIsQuestionAnswered={setIsQuestionAnswered} isQuestionAnswered={isQuestionAnswered}/>
                        )}
                    )
                )}
            </div>

            {showAnswers && (
                <button onClick={nextQuestion}>klik</button>
            )}

        </div>
    );
};

export default Question;
