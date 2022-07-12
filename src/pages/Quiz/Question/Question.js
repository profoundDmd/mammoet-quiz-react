import React, {useState} from 'react';
import "./Question.scss";
import YouTube from "react-youtube";
import {AnimatePresence, motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import Answer from "../Answer/Answer";
import Button from "../../../components/Button/Button";
import sandglass from "../../../assets/images/sandglass.png";
import Confetti from 'react-confetti';
import {diminishSound, turnUpSound} from "../../../utility/AudioPlayer";

const Question = ({question, setCurrentQuestion, setStopButtonDisabledClass, setScore, quizMusic}) => {

    const [showYoutubeVid, setShowYoutubeVid] = useState(true);
    const [showQuestion, setShowQuestion] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);
    const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
    const [animateQuestionText, setAnimateQuestionText] = useState();
    const [animateQuestionOffScreen, setAnimateQuestionOffScreen] = useState();
    const [throwConfetti, setThrowConfetti] = useState(false);

    const youtubeOpts = {
        playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            modestbranding: 1,
            rel: 0,
            mute: 0,
            origin: 'http://localhost:3000',
            start: 0
        },
    }
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

    const onYtIntroReady = () => {
        diminishSound(quizMusic, 0.1);
    }

    const onYtIntroEnd = () => {
        setShowYoutubeVid(false);
        turnUpSound(quizMusic, 0.6);
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

            <AnimatePresence onExitComplete={onYtIntroExitComplete}>
                {showYoutubeVid && (
                    <motion.div className="ytQuestionIntro" exit={{ opacity: 0, transition: {duration: 2.5} }}>
                        <div className="modalBg" />
                        <YouTube
                            videoId={question.youtubeId}
                            opts={youtubeOpts}
                            onEnd={onYtIntroEnd}
                            onReady={onYtIntroReady}
                            controls={false}
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

            {showAnswers && (
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    className="answers"
                >
                    {
                        question.answers.map((answer, index) => (
                            <motion.div
                                key={answer.id}
                                className="answerDiv"
                                variants={item}
                            >
                                <Answer key={answer.id} {...answer} setIsQuestionAnswered={setIsQuestionAnswered} isQuestionAnswered={isQuestionAnswered} setScore={setScore} setThrowConfetti={setThrowConfetti}/>
                            </motion.div>
                        ))
                    }
                </motion.div>
            )}

            <AnimatePresence>
                {showAnswers && (
                    <img src={sandglass} className="sandglass" alt={""}/>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isQuestionAnswered && (
                    <motion.div
                        initial={{opacity: 0, y: 150 }}
                        animate={{opacity: 1, y: 50 }}
                        transition={{duration: 1, type: "spring"}}
                        className="nextQuestion"
                    >
                        <Button type="wood" text="Volgende" className="nextQuestionButton quizTextColor" clickEvent={nextQuestion} />
                    </motion.div>
                )}
            </AnimatePresence>

            <Confetti run={throwConfetti} width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={400} />

        </motion.div>
    );
};

export default Question;
