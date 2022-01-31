import React, {useState} from 'react';
import MainTitle from "../MainTitle/MainTitle";
import Button from "../Button/Button";
import "./StartScreen.scss";
import {animated, easings, useTransition} from 'react-spring'

const StartScreen = ({bgMusic, startScreenOnScreen, setStartScreenOnScreen, setMainMenuOnScreen}) => {

    const startPressed = () => {
        bgMusic.play();
        setStartScreenOnScreen(startScreenOnScreen => !startScreenOnScreen);
/*
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
*/
    }

    const transitions = useTransition(startScreenOnScreen, {
        from: { opacity: 1, marginTop: -100},
        enter: { opacity: 1, marginTop: 0 },
        leave: { opacity: 0 },
        config: {
            duration: 1000
        }
    });

    //https://stackoverflow.com/questions/67351865/how-to-animate-the-filtering-of-a-list-using-usetransition-in-react-spring
    return (
        <>
            {
                transitions((style, item) =>
                    item ?
                        <animated.div>
                            <MainTitle />
                        </animated.div>
            }
            <Button type="stone" text="Start2" clickEvent={startPressed} />
        </>
    );
};

export default StartScreen;
