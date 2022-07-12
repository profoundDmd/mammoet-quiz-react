import React, {useEffect, useState} from 'react';
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
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";
import quizMusicAudio from "../../assets/sounds/quizMusic.mp3";
import applauseAudio from "../../assets/sounds/applause.mp3";
import tadaAudio from "../../assets/sounds/tada.mp3";
import {stopSound} from "../../utility/AudioPlayer";

const Quiz = () => {
    const navigate = useNavigate();

    const [showWallPainting, setShowWallPainting] = useState(true);
    const [showYtIntro, setShowYtIntro] = useState(true);
    const [showText, setShowText] = useState(false);
    const [showQuizProps, setShowQuizProps] = useState(false);
    const [quizMusic] = useState(new Audio(quizMusicAudio));

    const [showScoreboard, setShowScoreboard] = useState(false);
    const [showQuestionCounter, setShowQuestionCounter] = useState(false);
    const [quizPropsSetupDone, setQuizPropsSetupDone] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [stopButtonDisabledClass, setStopButtonDisabledClass] = useState("disabled");
    const [score, setScore] = useState(0);

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

    const endQuiz = () => {
        navigate("/mainmenu");
        stopSound(quizMusic);
    }

    const variants = {
        hide: { opacity: 0, transition: { duration: 4 } },
        show: { opacity: 1, }
    };

    const scoreScreenAnimation = () => {
        new Audio(applauseAudio).play();
        new Audio(tadaAudio).play();
    }

    useEffect(() => {
        quizMusic.loop = true;
        quizMusic.volume = 0.6
    }, [quizMusic]);


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
                                opts={youtubeOpts}
                                onReady={onYtIntroReady}
                                onEnd={onYtIntroEnd}
                                className="youtubeVid"
                            />
                            <motion.img
                                variants={variants}
                                animate={showWallPainting ? 'show' : 'hide'}
                                src={wallPainting}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence onExitComplete={prepareForQuiz}>
                    {showText && (<QuizIntroText setShowText={setShowText} quizMusic={quizMusic}/>)}
                </AnimatePresence>

                <AnimatePresence>
                    {showQuizProps && (
                        <>
                            <Mammoth setShowScoreboard={setShowScoreboard}/>
                            <Scoreboard setShowQuestionCounter={setShowQuestionCounter} showScoreboard={showScoreboard} stopButtonDisabledClass={stopButtonDisabledClass} score={score} quizMusic={quizMusic}/>
                            <QuestionCounter questions={questionList.questions} showQuestionCounter={showQuestionCounter} setQuizPropsSetupDone={setQuizPropsSetupDone} currentQuestion={currentQuestion}/>
                        </>
                    )}
                </AnimatePresence>

                {quizPropsSetupDone && (
                    <motion.div className="quizQuestions">
                        {
                            questionList.questions.map((question, index) => {
                                return index === currentQuestion && (
                                    <Question question={question} setCurrentQuestion={setCurrentQuestion} setStopButtonDisabledClass={setStopButtonDisabledClass} setScore={setScore} key={`question_${question.id}`} quizMusic={quizMusic}/>
                                )
                            })
                        }
                    </motion.div>
                )}

                {currentQuestion === questionList.questions.length && (
                    <motion.div
                        initial={{opacity: 0,  }}
                        animate={{opacity: 1,  }}
                        transition={{duration: 1}}
                        className="finishedQuiz"
                        onAnimationStart={scoreScreenAnimation}
                    >
                        <span className="congrats">
                            Gefeliciteerd!
                        </span>
                        <br/>
                        Je hebt het einde van de quiz behaald en hebt een score van: <span className="displayScore"> {score} / {questionList.questions.length}</span>
                        <br/>
                        Nu kan je op ontdekking in de grot!!
                        <br/> <br/>
                        <Button text="TERUG" type="wood" className="stopQuiz" clickEvent={endQuiz}/>
                    </motion.div>
                )}

            </div>
            <img src={bigFrameBorder} className="bigFrameImage" alt=""/>
            <Ribbon text="Quiz" classNames="frameRibbon"/>
        </motion.div>
    );
};

export default Quiz;
