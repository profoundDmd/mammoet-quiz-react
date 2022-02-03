import React, {useState} from 'react';
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import "./MainMenu.scss"
import {motion} from "framer-motion";
import {animated, easings, useSpring} from 'react-spring'
import stoneFall from "../../assets/sounds/stoneFall.mp3";

const MainMenu = ({style, setStartScreenOnScreen, setMainMenuOnScreen, setMicroscopeOnScreen, setQuizOnScreen}) => {

    const goToStartScreen = () => {
        setMainMenuOnScreen(mainMenuOnScreen => !mainMenuOnScreen);
        setTimeout(() => {
            setStartScreenOnScreen(startScreenOnScreen => !startScreenOnScreen)
        }, 1200);
    }

    const goToMicroscope = () => {
        setMainMenuOnScreen(mainMenuOnScreen => !mainMenuOnScreen);
        setTimeout(() => {
            setMicroscopeOnScreen(microscopeOnScreen => !microscopeOnScreen);
        }, 1200);
    }

    const goToQuiz = () => {
        setMainMenuOnScreen(mainMenuOnScreen => !mainMenuOnScreen);
        setTimeout(() => {
            setQuizOnScreen(quizOnScreen => !quizOnScreen);
        }, 1200);
    }

    return (
        <motion.div
            initial={{opacity: 0, marginTop: "-60%",  }}
            animate={{opacity: 1, marginTop: "-15%" }}
            exit={{opacity: 0, marginTop: "-60%" }}
            transition={{duration: 1.4}}
            className={`mainMenu`}
        >
            <Title text="Menu" size="big"/>
            <div className="menuButtons">
                <Button text="Home" type="stone" clickEvent={goToStartScreen}/>
                <Button text="Microscoop" type="stone" clickEvent={goToMicroscope} />
                <Button text="Quiz" type="wood" clickEvent={goToQuiz}/>
            </div>
        </motion.div>
    );
};

export default MainMenu;
