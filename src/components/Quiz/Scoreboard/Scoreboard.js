import React from 'react';
import {motion} from "framer-motion";
import "./Scoreboard.scss";
import comet from "../../../assets/images/comet.png";
import Button from "../../Button/Button";
import {useNavigate} from "react-router-dom";

const Scoreboard = ({setShowQuestionCounter, showScoreboard}) => {

    const navigate = useNavigate();

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30,
        transition: { duration: 4300 }
    };

    const onAnimationComplete = () => {
        setShowQuestionCounter(t => !t);
    }

    const endQuiz = () => {
        navigate("/mainmenu");
    }

    return (
        <>
            {showScoreboard && (
            <motion.div
                className="scoreboard quizProps"
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{duration: 0.8, type: "spring"}}
                onAnimationComplete={onAnimationComplete}
            >
                <span className="scoreText">Score</span>
                <span className="score scoreText">0</span>
                <Button text="STOP" type="stone" clickEvent={endQuiz}/>
            </motion.div>
            )}
        </>
    );
};

export default Scoreboard;
