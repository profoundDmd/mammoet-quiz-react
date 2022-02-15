import React from 'react';
import {motion} from "framer-motion";
import "./Scoreboard.scss";
import comet from "../../../assets/images/comet.png";

const Scoreboard = ({setShowQuestionCounter, showScoreboard}) => {

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30,
        transition: { duration: 4300 }
    };

    const onAnimationComplete = () => {
        setShowQuestionCounter(t => !t);
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
                <h2>Scoreboard</h2>
            </motion.div>
            )}
        </>
    );
};

export default Scoreboard;
