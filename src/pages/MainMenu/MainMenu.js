import React, {useState} from 'react';
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import "./MainMenu.scss"
import {animated } from 'react-spring'

const MainMenu = ({mainMenuStyles, setStartScreenOnScreen, setMainMenuOnScreen}) => {

    return (
        <animated.div style={mainMenuStyles} className="mainMenu">
            <Title text="Menu" size="big"/>
            <div className="menuButtons">
                <Button text="Home" type="stone" clickEvent={() => {
                    setStartScreenOnScreen(startScreenOnScreen => !startScreenOnScreen);
                    setMainMenuOnScreen(mainMenuOnScreen => !mainMenuOnScreen);
                    /*
                    toggleStartScreen();
                    setTimeout(() => {
                        setMainMenuStyles.start({marginTop: "-270px" });
                    }, 850);*/
                }}/>
                <Button text="Microscoop" type="stone" clickEvent={() => console.log("")} />
                <Button text="Quiz" type="wood" clickEvent={() => console.log("")} />
            </div>
        </animated.div>
    );
};

export default MainMenu;
