import React, {useEffect, useState} from 'react';
import MainTitle from "../MainTitle/MainTitle";
import Button from "../Button/Button";
import "./StartScreen.scss";
import {motion} from "framer-motion";
import {useNavigate} from 'react-router-dom';
import windAudio from "../../assets/sounds/wind.mp3";
import {diminishSound} from "../../utility/AudioPlayer";

const StartScreen = () => {
    const navigate = useNavigate();
    const [wind] = useState(new Audio(windAudio));

    const startEvent = () => {
        diminishSound(wind, 0);
        navigate("/mainmenu")
    }

    useEffect(() => {
        wind.loop = true;
        wind.volume = 0.30;
        wind.play();
    }, []);


    return (
        <motion.div
            initial={{opacity: 0,  }}
            animate={{opacity: 1,  }}
            exit={{opacity: 0, }}
            transition={{duration: 1.4}}
            className={"startScreen"}
        >
            <div className="startScreenContent">
                <MainTitle />
                <Button type="stone" text="START" clickEvent={startEvent} />
            </div>
        </motion.div>
    );
};

export default StartScreen;
