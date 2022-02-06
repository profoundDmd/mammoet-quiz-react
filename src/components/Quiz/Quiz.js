import React, {useState} from 'react';
import "./Quiz.scss";
import YouTube from 'react-youtube';
import {motion} from "framer-motion";
import wallPainting from "./../../assets/images/wallPainting.jpeg"
import bigFrame from "./../../assets/images/bigFrame.png"
import Ribbon from "./Ribbon/Ribbon";

const Quiz = () => {
    const opts = {
        height: '390', width: '640', playerVars: {autoplay: 1,}, origin: 'http://localhost:3000',
    };
    //const [wallPaintingBackground, setWallPaintingBackground] = useState("wallPainting");
    const [showWallPainting, setShowWallPainting] = useState(true);

    const onReady = (event) => {
        setShowWallPainting(false);
    }

    const onEnd = (event) => {
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
            <img src={bigFrame} className="bigFrameImage" alt=""/>
            <div className="bigFrameContent">
                <Ribbon text="Quiz" classNames="frameRibbon"/>
                <motion.div className="ytIntro">
                    <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onReady} onEnd={onEnd} className="youtubeVid"/>
                    <motion.img
                        variants={variants}
                        animate={showWallPainting ? 'show' : 'hide'}
                        src={wallPainting}
                    />
                </motion.div>
                <motion.div className="textIntro">

                </motion.div>
                <motion.div className="quizQuestions">

                </motion.div>
            </div>
        </motion.div>
    );
};

export default Quiz;
