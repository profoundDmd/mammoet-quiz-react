import React, {useState} from 'react';
import MainTitle from "../MainTitle/MainTitle";
import Button from "../Button/Button";
import "./StartScreen.scss";

const StartScreen = ({bgMusic, setMainMenuMarginTop}) => {

    const [opacity, setOpacity] = useState(1);
    const [display, setDisplay] = useState("flex");

    const startQuizPressed = () => {
        toggleStartScreen();
        setMainMenuMarginTop("-280px");

        bgMusic.play();

    }

    const toggleStartScreen = () => {
        if(display === "none"){
            setDisplay("flex");
            setTimeout(() => setOpacity(1), 10);
        }else{
            setOpacity(0);
            setTimeout(() => setDisplay("none"), 1500);
        }
    }

    return (
        <div className="startScreen" style={{opacity: opacity, display: display}}>
            <div className="startContent">
                <MainTitle/>
                <Button text="START" type="stone" clickEvent={startQuizPressed}/>
            </div>
        </div>
    );
};

export default StartScreen;
