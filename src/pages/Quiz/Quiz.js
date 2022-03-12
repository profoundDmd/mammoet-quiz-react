import React, {useState} from 'react';
import "./Quiz.scss";
import {AnimatePresence, motion} from "framer-motion";
import bigFrameBorder from "../../assets/images/bigFrame.png";
import Ribbon from "./Ribbon/Ribbon";
import QuizIntroText from "./QuizIntroText";
import Scoreboard from "./Scoreboard/Scoreboard";
import Mammoth from "./Mammoth/Mammoth";
import questionList from "./questions.json"
import QuestionCounter from "./QuestionCounter/QuestionCounter";
import YouTube from "react-youtube";
import wallPainting from "../../assets/images/wallPainting.jpeg";
import Question from "./Question/Question";

const Quiz = () => {
    const opts = {
        height: '390', width: '640', playerVars: {autoplay: 1,}, origin: 'http://localhost:3000',
    };
    const [showWallPainting, setShowWallPainting] = useState(true);
    const [showYtIntro, setShowYtIntro] = useState(true);
    const [showText, setShowText] = useState(false);
    const [showQuizProps, setShowQuizProps] = useState(false);

    const [showScoreboard, setShowScoreboard] = useState(false);
    const [showQuestionCounter, setShowQuestionCounter] = useState(false);
    const [quizPropsSetupDone, setQuizPropsSetupDone] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [stopButtonDisabledClass, setStopButtonDisabledClass] = useState("disabled");
    const [score, setScore] = useState(0);

    const onYtIntroReady = (event) => {
        setShowWallPainting(false);
    }

    const onYtIntroEnd = (event) => {
        setShowYtIntro(false);
    }

    const onYtIntroExitComplete = (event) => {
        setShowText(true);
    }

    const prepareForQuiz = () => {
        setShowQuizProps(true);
    }

    const variants = {
        hide: { opacity: 0, transition: { duration: 4 } },
        show: { opacity: 1, }
    };

    return (
        <motion.div
            initial={{opacity: 0,  }}
            animate={{opacity: 1,  }}
            exit={{opacity: 0, }}
            transition={{duration: 1.4}}
            className="quiz"
        >
            <div className="bigFrameContent">
                <AnimatePresence onExitComplete={onYtIntroExitComplete}>
                    { showYtIntro && (
                        <motion.div className="ytIntro" exit={{ opacity: 0, transition: {duration: 2.5} }}>
                            <div className="modalBg" />
                            <YouTube
                                videoId="452kpneADrA"
                                opts={opts}
                                onReady={onYtIntroReady}
                                onEnd={onYtIntroEnd}
                                className="youtubeVid"/>
                            <motion.img
                                variants={variants}
                                animate={showWallPainting ? 'show' : 'hide'}
                                src={wallPainting}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence onExitComplete={prepareForQuiz}>
                    {showText && (<QuizIntroText setShowText={setShowText}/>)}
                </AnimatePresence>

                <AnimatePresence>
                    {showQuizProps && (
                        <>
                            <Mammoth setShowScoreboard={setShowScoreboard}/>
                            <Scoreboard setShowQuestionCounter={setShowQuestionCounter} showScoreboard={showScoreboard} stopButtonDisabledClass={stopButtonDisabledClass} score={score} />
                            <QuestionCounter questions={questionList.questions} showQuestionCounter={showQuestionCounter} setQuizPropsSetupDone={setQuizPropsSetupDone} currentQuestion={currentQuestion}/>
                        </>
                    )}
                </AnimatePresence>

                {quizPropsSetupDone && (
                    <motion.div className="quizQuestions">
                        {
                            questionList.questions.map((question, index) => {
                                return index === currentQuestion && (
                                    <Question question={question} setCurrentQuestion={setCurrentQuestion} setStopButtonDisabledClass={setStopButtonDisabledClass} setScore={setScore} key={`question_${question.id}`}/>
                                )
                            })
                        }
                    </motion.div>
                )}

                {currentQuestion === questionList.questions.length - 1 && (
                    <div>Je hebt gedaan!</div>
                )}

            </div>
            <img src={bigFrameBorder} className="bigFrameImage" alt=""/>
            <Ribbon text="Quiz" classNames="frameRibbon"/>
        </motion.div>
    );
};

export default Quiz;
