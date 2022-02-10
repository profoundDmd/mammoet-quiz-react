import React, {useState} from 'react';
import "./Quiz.scss";
import YouTube from 'react-youtube';
import {AnimatePresence, motion} from "framer-motion";
import wallPainting from "./../../assets/images/wallPainting.jpeg";
import bigFrameBorder from "./../../assets/images/bigFrame.png";
import scoreBoard from "./../../assets/images/smallFrame.png";
import mammoth from "./../../assets/images/mammoth.png";
import Ribbon from "./Ribbon/Ribbon";
import QuizIntroText from "./QuizIntroText";


const Quiz = () => {
    const opts = {
        height: '390', width: '640', playerVars: {autoplay: 1,}, origin: 'http://localhost:3000',
    };
    const [showWallPainting, setShowWallPainting] = useState(true);
    const [showYtIntro, setShowYtIntro] = useState(true);
    const [showText, setShowText] = useState(false);
    const [showQuizProps, setShowQuizProps] = useState(false);

    const onYtIntroReady = (event) => {
        setShowWallPainting(false);
    }

    const onYtIntroEnd = (event) => {
        setShowYtIntro(false);
    }

    const onYtIntroExitComplete = (event) => {
        setShowText(true);
    }

    const prepareForQuiz = () => {}

    const variants = {
        hide: { opacity: 0, transition: { duration: 4 } },
        show: { opacity: 1, }
    };

    //https://codesandbox.io/s/framer-motion-side-menu-mx2rw?from-embed=&file=/src/MenuToggle.tsx

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
                        <motion.div className="ytIntro" exit={{ opacity: 0, duration: 2 }}>
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
                    {showText && (
                        <motion.div exit={{ opacity: 0, duration: 2 }}>
                            <QuizIntroText setShowText={setShowText}/>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div className="quizQuestions">

                </motion.div>
            </div>
            <img src={bigFrameBorder} className="bigFrameImage" alt=""/>
            <Ribbon text="Quiz" classNames="frameRibbon"/>
        </motion.div>
    );
};

export default Quiz;
