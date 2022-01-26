import React, {useState} from 'react';
import MainTitle from "../MainTitle/MainTitle";
import Button from "../Button/Button";
import "./StartScreen.scss";
import {animated, easings} from 'react-spring'
import stoneFall from "../../assets/sounds/stoneFall.mp3";

const StartScreen = ({bgMusic, startScreenProps, setStartScreenOnScreen, setMainMenuOnScreen}) => {

    const startPressed = () => {
        bgMusic.play();
        setStartScreenOnScreen(startScreenOnScreen => !startScreenOnScreen);

        setMainMenuProps.start({
            marginTop: mainMenuOnScreen ? "-270px" : "-1200px",
            config: {
                duration: 2100,
                easing: easings.easeInOutQuart,
            },
            onRest: () => {
                if(mainMenuOnScreen){
                    new Audio(stoneFall).play();
                    setShakeAnimation("shake");
                }
            },
        });

        setTimeout(() => {
            setMainMenuOnScreen(mainMenuOnScreen => !mainMenuOnScreen);
        }, 1000);
    }

    return (
        <animated.div className="startScreen" style={startScreenProps}>
            <div className="startContent">
                <MainTitle/>
                <Button text="START" type="stone" clickEvent={startPressed}/>
            </div>
        </animated.div>
    );
};

export default StartScreen;
