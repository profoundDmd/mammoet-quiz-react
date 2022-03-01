import React, {useState} from 'react';
import "./Question.scss";
import YouTube from "react-youtube";
import {AnimatePresence, motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import Answer from "../Answer/Answer";
import Button from "../../../components/Button/Button";

const Question = ({question, setCurrentQuestion, setStopButtonDisabledClass}) => {

    const [showYoutubeVid, setShowYoutubeVid] = useState(true);
    const [showQuestion, setShowQuestion] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);
    const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
    const [animateQuestionText, setAnimateQuestionText] = useState();
    const [animateQuestionOffScreen, setAnimateQuestionOffScreen] = useState();

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
        setStopButtonDisabledClass("disabled");
        setAnimateQuestionOffScreen(-400);
    }

    const textDone = () => {
        setAnimateQuestionText(-180);
    }

    const questionTextAnimation = () => {
        setShowAnswers(true);
        setStopButtonDisabledClass("");
    }

    const animatedOffScreen = () => {
        setCurrentQuestion(cq => {
            return ++cq;
        });
    }

    return (
        <motion.div
            className="question"
            animate={{ x: animateQuestionOffScreen, transition: {duration: .5}}}
            onAnimationComplete={animatedOffScreen}
        >
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
                    animate={{ y: animateQuestionText, transition: {duration: .5}}}
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

            <AnimatePresence>
                {isQuestionAnswered && (
                    <motion.div
                        initial={{opacity: 0, y: 50 }}
                        animate={{opacity: 1, y: 0 }}
                        transition={{duration: 1, type: "spring"}}
                    >
                        <Button type="stone" text="Volgende" clickEvent={nextQuestion} />
                    </motion.div>
                )}
            </AnimatePresence>


        </motion.div>
    );
};

export default Question;
