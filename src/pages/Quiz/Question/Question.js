import React, {useState} from 'react';
import "./Question.scss";
import YouTube from "react-youtube";
import {AnimatePresence, motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import Answer from "../Answer/Answer";
import Button from "../../../components/Button/Button";
import Sandglass from "../../../assets/images/sandglass.png";
import Confetti from 'react-confetti'

const Question = ({question, setCurrentQuestion, setStopButtonDisabledClass, setScore}) => {

    const [showYoutubeVid, setShowYoutubeVid] = useState(true);
    const [showQuestion, setShowQuestion] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);
    const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
    const [animateQuestionText, setAnimateQuestionText] = useState();
    const [animateQuestionOffScreen, setAnimateQuestionOffScreen] = useState();
    const [throwConfetti, setThrowConfetti] = useState(false);

    const opts = {height: '390', width: '640', playerVars: {autoplay: 1,}, origin: 'http://localhost:3000',};

    const variants = {
        hidden: {scale: 0},
        show: {
            scale: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const onYtIntroEnd = () => {
        setShowYoutubeVid(false);
    }

    const onYtIntroExitComplete = () => {
        setShowQuestion(true);
    }

    const nextQuestion = () => {
        setStopButtonDisabledClass("disabled");
        setAnimateQuestionOffScreen(-600);
    }

    const textDone = () => {
        setAnimateQuestionText(-180);
    }

    const questionTextAnimation = () => {
        setShowAnswers(true);
        setStopButtonDisabledClass("");
    }

    const animatedOffScreen = () => {
        setTimeout(() => {
            setCurrentQuestion(cq => {
                return ++cq;
            });
        }, 750)

    }

    return (
        <motion.div
            className="question"
            animate={{ x: animateQuestionOffScreen, transition: {duration: .5}}}
            onAnimationComplete={animatedOffScreen}
        >
            {showAnswers && (
                <Sandglass/>
            )}

            <AnimatePresence onExitComplete={onYtIntroExitComplete}>
                {showYoutubeVid && (
                    <motion.div className="ytQuestionIntro" exit={{ opacity: 0, transition: {duration: 2.5} }}>
                        <div className="modalBg" />
                        <YouTube
                            videoId="452kpneADrA"
                            opts={opts}
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

            <motion.div
                variants={variants}
                initial="hidden"
                animate="show"
                className="answers"
            >
                {showAnswers && (
                    question.answers.map(
                        answer => { return(
                            <Answer {...answer} setIsQuestionAnswered={setIsQuestionAnswered} isQuestionAnswered={isQuestionAnswered} setScore={setScore} setThrowConfetti={setThrowConfetti}/>
                        )}
                    )
                )}
            </motion.div>

            <AnimatePresence>
                {isQuestionAnswered && (
                    <motion.div
                        initial={{opacity: 0, y: 150 }}
                        animate={{opacity: 1, y: 50 }}
                        transition={{duration: 1, type: "spring"}}
                        className="nextQuestion"
                    >
                        <Button type="stone" text="Volgende" className="nextQuestionButton" clickEvent={nextQuestion} />
                    </motion.div>
                )}
            </AnimatePresence>

            <Confetti run={throwConfetti} width={800} height={700} recycle={false} numberOfPieces={300} />

        </motion.div>
    );
};

export default Question;
