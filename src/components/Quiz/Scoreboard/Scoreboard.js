import React from 'react';
import {motion} from "framer-motion";
import "./Scoreboard.scss";
import comet from "../../../assets/images/comet.png";

const Scoreboard = () => {

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30,
        transition: { duration: 4300 }
    };

    return (
        <motion.div
            className="scoreboard quizProps"
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 1.5, type: "spring"}}
        >
            <h2>Scoreboard</h2>
        </motion.div>
    );
};

export default Scoreboard;
