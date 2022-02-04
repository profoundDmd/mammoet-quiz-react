import React, {useState} from 'react';
import "./Quiz.scss";
import YouTube from 'react-youtube';
import {motion} from "framer-motion";
import bigFrame from "./../../assets/images/bigFrame.png"
import Ribbon from "./Ribbon/Ribbon";

const Quiz = () => {
    const opts = {
        height: '390', width: '640', playerVars: {autoplay: 1,}, origin: 'http://localhost:3000',
    };
    const [wallPaintingBackground, setWallPaintingBackground] = useState("wallPainting");

    const onReady = (event) => {
        setWallPaintingBackground("");
    }

    const onEnd = (event) => {
        console.log("end");
    }

    return (
        <motion.div
            initial={{opacity: 0,  }}
            animate={{opacity: 1,  }}
            exit={{opacity: 0, }}
            transition={{duration: 1.4}}
            className={`quiz ${wallPaintingBackground}`}
        >
            <img src={bigFrame} />
            <Ribbon text="Quiz" classNames="frameRibbon"/>
            <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onReady} onEnd={onEnd}/>;
        </motion.div>
    );
};

export default Quiz;
