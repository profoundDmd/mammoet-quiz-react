import React, {useState} from 'react';
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import "./MainMenu.scss"
import {animated } from 'react-spring'

const MainMenu = ({mainMenuProps, setStartScreenOnScreen, setMainMenuOnScreen}) => {
    const goToStartScreen = () => {
        setMainMenuOnScreen(mainMenuOnScreen => !mainMenuOnScreen);
        setTimeout(() => {
            setStartScreenOnScreen(startScreenOnScreen => !startScreenOnScreen);
        }, 850);
    }

    const goToMicroscope = () => {

    }

    const goToQuiz = () => {

    }

    return (
        <animated.div style={mainMenuProps} className="mainMenu">
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
