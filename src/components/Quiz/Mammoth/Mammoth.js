import React from 'react';
import {motion} from "framer-motion";
import mammoth from "../../../assets/images/mammoth.png";
import "./Mammoth.scss";

const Mammoth = ({setShowScoreboard}) => {

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30,
        transition: { duration: 2300 }
    };

    const onAnimationComplete = () => {
        setShowScoreboard(t => !t);
    }

    return (
        <motion.div
            className="mammoth quizProps"
            initial={{opacity: 0, x: -400 }}
            animate={{opacity: 1, x:0 }}
            transition={{duration: 1, type: "spring"}}
            onAnimationComplete={onAnimationComplete}
        >
                <img src={mammoth}/>
                <div className="eyeBlink"/>
        </motion.div>
    );
};

export default Mammoth;
