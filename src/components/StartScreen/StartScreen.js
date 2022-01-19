import React from 'react';
import MainTitle from "../MainTitle/MainTitle";
import Button from "../Button/Button";
import "./StartScreen.scss";

const StartScreen = () => {
    return (
        <div className="startScreen">
            <div className="startContent">
                <MainTitle/>
                <Button text="START" type="stone" clickEvent={() => {
                    console.log("clicked");
                }}/>
            </div>
        </div>
    );
};

export default StartScreen;
