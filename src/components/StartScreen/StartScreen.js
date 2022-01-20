import React, {useState} from 'react';
import MainTitle from "../MainTitle/MainTitle";
import Button from "../Button/Button";
import "./StartScreen.scss";

const StartScreen = ({bgMusic, setStyles}) => {
    const [opacity, setOpacity] = useState(1);
    const [display, setDisplay] = useState("flex");

    const startQuizPressed = () => {
        hideScreen();
        bgMusic.play();

        setTimeout(() => {
            setStyles.start({marginTop: "-270px" });
        }, 850);
    }

    const hideScreen = () => {
        setOpacity(0);
        setTimeout(() => setDisplay("none"), 1500);
        /*
        if(display === "none"){
            setDisplay("flex");
            setTimeout(() => setOpacity(1), 10);
        }else{

        }*/
    }

    return (
        <div className="startScreen" style={{opacity: opacity, display: display}} >
            <div className="startContent">
                <MainTitle/>
                <Button text="START" type="stone" clickEvent={startQuizPressed}/>
            </div>
        </div>
    );
};

export default StartScreen;
