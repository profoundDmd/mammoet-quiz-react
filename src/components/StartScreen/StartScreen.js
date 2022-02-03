import React, {useState} from 'react';
import MainTitle from "../MainTitle/MainTitle";
import Button from "../Button/Button";
import "./StartScreen.scss";
import {motion} from "framer-motion";

import {animated, easings, useTransition} from 'react-spring'

const StartScreen = ({style, setStartScreenOnScreen, bgMusic}) => {

    const clickEvent = () => {
        setStartScreenOnScreen(setStartScreenOnScreen = !setStartScreenOnScreen);
        bgMusic.play();
    }

    //https://stackoverflow.com/questions/67351865/how-to-animate-the-filtering-of-a-list-using-usetransition-in-react-spring
    return (
        <motion.div
            initial={{opacity: 0,  }}
            animate={{opacity: 1,  }}
            exit={{opacity: 0, }}
            transition={{duration: 1.4}}
            className={"startScreen"}
        >
            <div className="startScreenContent">
                <MainTitle />
                <Button type="stone" text="START" clickEvent={clickEvent} />
            </div>
        </motion.div>
    );
};

export default StartScreen;
