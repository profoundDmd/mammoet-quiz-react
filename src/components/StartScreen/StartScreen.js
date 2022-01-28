import React, {useState} from 'react';
import MainTitle from "../MainTitle/MainTitle";
import Button from "../Button/Button";
import "./StartScreen.scss";
import {animated, easings} from 'react-spring'
import stoneFall from "../../assets/sounds/stoneFall.mp3";
import {CSSTransition} from "react-transition-group";

const StartScreen = ({bgMusic, startScreenSpringProps, setStartScreenOnScreen, setMainMenuOnScreen}) => {

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
        setTimeout(() => {
            setMainMenuOnScreen(mainMenuOnScreen => !mainMenuOnScreen);
        }, 1000);
    }
    const [inProp, setInProp] = useState(false);
    return (

    <div>
        <CSSTransition in={inProp} timeout={1000} classNames="my-node">
            <div>
                {"I'll receive my-node-* classes"}
            </div>
        </CSSTransition>
        <button type="button" onClick={() => setInProp(!inProp)}>
            Click to Enter
        </button>
    </div>
    );
};

export default StartScreen;
