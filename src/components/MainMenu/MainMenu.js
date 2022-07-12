import React, {useEffect, useState} from 'react';
import Title from "../Title/Title";
import Button from "../Button/Button";
import "./MainMenu.scss"
import {motion} from "framer-motion";
import {useNavigate} from 'react-router-dom';
import stoneFall from "../../assets/sounds/stoneFall.mp3";
import stoneGrind from "../../assets/sounds/stoneGrind.mp3";
import {diminishSound, stopSound} from "../../utility/AudioPlayer";

const MainMenu = ({bgMusic}) => {
    const navigate = useNavigate();
    const [stoneGrindSE] = useState(new Audio(stoneGrind));
    const [stoneFallSE] = useState(new Audio(stoneFall));
    const [shake, setShake] = useState("");

    const goToStartScreen = () => {
        navigate("/");
        stopSound(bgMusic);
    }

    const goToMicroscope = () => {
        navigate("/microscope");
        diminishSound(bgMusic, 0.2);
    }

    const goToQuiz = () => {
        navigate("/quiz");
        stopSound(bgMusic);
    }

    const onAnimationStart = () => {
        stoneGrindSE.play();
    }

    const onAnimationComplete = (event) => {
        stoneGrindSE.pause();
        setTimeout(() => {
            if(event.marginTop !== "-60%"){
                stoneFallSE.play();
                setShake("shake");
            }
        }, 100);
    }

    useEffect(() => {
        bgMusic.volume = 1;
        bgMusic.play();
    }, [bgMusic]);


    return (
        <motion.div
            initial={{marginTop: "-60%",  }}
            animate={{marginTop: "-15%" }}
            exit={{marginTop: "-60%" }}
            transition={{duration: 1.8}}
            onAnimationStart={onAnimationStart}
            onAnimationComplete={onAnimationComplete}
            className={`mainMenu ${shake}`}
        >
            <Title text="Menu" size="big"/>
            <div className="menuButtons">
                <Button text="Home" type="stone" clickEvent={goToStartScreen}/>
                <Button text="Microscoop" type="stone" clickEvent={goToMicroscope} />
                <Button text="Quiz" type="wood" clickEvent={goToQuiz}/>
            </div>
        </motion.div>
    );
};

export default MainMenu;
