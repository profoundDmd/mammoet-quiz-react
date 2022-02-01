import React, {useState} from 'react';
import MainTitle from "../MainTitle/MainTitle";
import Button from "../Button/Button";
import "./StartScreen.scss";
import {animated, easings, useTransition} from 'react-spring'

const StartScreen = ({style, clickEvent}) => {

    //https://stackoverflow.com/questions/67351865/how-to-animate-the-filtering-of-a-list-using-usetransition-in-react-spring
    return (
        <animated.div style={style}>
            <div className="startScreenContent">
                <MainTitle />
                <Button type="stone" text="START" clickEvent={clickEvent} />
            </div>
        </animated.div>
    );
};

export default StartScreen;
