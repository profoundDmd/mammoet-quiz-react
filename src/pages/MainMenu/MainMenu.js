import React, {useState} from 'react';
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import "./MainMenu.scss"
import {animated, easings, useSpring} from 'react-spring'
import stoneFall from "../../assets/sounds/stoneFall.mp3";

const MainMenu = ({mainMenuSpringProps, setMainMenuProps, mainMenuOnScreen, setStartScreenOnScreen, setMainMenuOnScreen, setMicroscopeOnScreen, setQuizOnScreen}) => {

    const goToStartScreen = () => {
        setMainMenuOnScreen(mainMenuOnScreen => !mainMenuOnScreen);
        setTimeout(() => {
            setStartScreenOnScreen(startScreenOnScreen => !startScreenOnScreen);
        }, 1000);
    }

    const goToMicroscope = () => {
        setMainMenuOnScreen(mainMenuOnScreen => !mainMenuOnScreen);
        setTimeout(() => {
            setMicroscopeOnScreen(microscopeOnScreen => !microscopeOnScreen);
        }, 1000);
    }

    const goToQuiz = () => {
        setMainMenuOnScreen(mainMenuOnScreen => !mainMenuOnScreen);
        setTimeout(() => {
            setQuizOnScreen(quizOnScreen => !quizOnScreen);
        }, 1000);
    }

    return (
        <animated.div style={mainMenuSpringProps} className={`mainMenu`}>
            <Title text="Menu" size="big"/>
            <div className="menuButtons">
                <Button text="Home" type="stone" clickEvent={goToStartScreen}/>
                <Button text="Microscoop" type="stone" clickEvent={goToMicroscope} />
                <Button text="Quiz" type="wood" clickEvent={goToQuiz} />
            </div>
        </animated.div>
    );
};

export default MainMenu;
