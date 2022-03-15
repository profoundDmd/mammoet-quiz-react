import React from 'react';
import MainTitle from "../MainTitle/MainTitle";
import Button from "../Button/Button";
import "./StartScreen.scss";
import {motion} from "framer-motion";
import {useNavigate} from 'react-router-dom';
import sandglass from "../../assets/images/sandglass.png";

const StartScreen = ({bgMusic}) => {
    const navigate = useNavigate();

    const clickEvent = () => {
        bgMusic.play();
        navigate("/mainmenu")
    }

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
                <Button type="stone" text="START" clickEvent={clickEvent} />
            </div>
        </motion.div>
    );
};

export default StartScreen;
