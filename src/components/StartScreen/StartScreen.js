import React, {useState} from 'react';
import MainTitle from "../MainTitle/MainTitle";
import Button from "../Button/Button";
import "./StartScreen.scss";

const StartScreen = ({bgMusic, startScreenProps, setStartScreenOnScreen, setMainMenuOnScreen}) => {
    const startQuizPressed = () => {
        bgMusic.play();
        setStartScreenOnScreen(startScreenOnScreen => !startScreenOnScreen);
        setMainMenuOnScreen(mainMenuOnScreen => !mainMenuOnScreen);
        /*
        toggleStartScreen();
        setTimeout(() => {
            setMainMenuStyles.start({marginTop: "-270px" });
        }, 850);*/
    }
    console.log("in startscreen: " + startScreenProps.opacity);

    return (
        <div className="startScreen" style={startScreenProps}>
            <div className="startContent">
                <MainTitle/>
                <Button text="START" type="stone" clickEvent={startQuizPressed}/>
            </div>
        </div>
    );
};

export default StartScreen;
