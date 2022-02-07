import React, {useState} from 'react';
import "./Quiz.scss";
import YouTube from 'react-youtube';
import {AnimatePresence, motion} from "framer-motion";
import wallPainting from "./../../assets/images/wallPainting.jpeg"
import bigFrame from "./../../assets/images/bigFrame.png"
import Ribbon from "./Ribbon/Ribbon";
import QuizIntroText from "./QuizIntroText";


const Quiz = () => {
    const opts = {
        height: '390', width: '640', playerVars: {autoplay: 1,}, origin: 'http://localhost:3000',
    };
    const [showWallPainting, setShowWallPainting] = useState(true);
    const [showYtIntro, setShowYtIntro] = useState(true);
    const [showText, setShowText] = useState(false);

    const onReady = (event) => {
        setShowWallPainting(false);
    }

    const onEnd = (event) => {
        //setShowYtIntro(false);
        setShowText(true);
    }

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
                <AnimatePresence>
                    { showYtIntro && (
                        <motion.div
                            className="ytIntro"
                            exit={{ opacity: 0, duration: 2 }}
                        >
                            <div className="modalBg" />
                            <YouTube
                                videoId="452kpneADrA"
                                opts={opts}
                                onReady={onReady}
                                onEnd={onEnd}
                                className="youtubeVid"/>
                            <motion.img
                                variants={variants}
                                animate={showWallPainting ? 'show' : 'hide'}
                                src={wallPainting}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
                {showText && (
                    <QuizIntroText/>
                )}

                <motion.div className="quizQuestions">

                </motion.div>
            </div>
            <img src={bigFrame} className="bigFrameImage" alt=""/>
            <Ribbon text="Quiz" classNames="frameRibbon"/>
        </motion.div>
    );
};

export default Quiz;
