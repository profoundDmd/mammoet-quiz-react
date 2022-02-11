import React from 'react';
import {motion} from "framer-motion";
import mammoth from "../../../assets/images/mammoth.png";
import "./Mammoth.scss";

const Mammoth = () => {

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30,
        transition: { duration: 2300 }
    };

    return (
        <motion.div
            className="mammoth quizProps"
            initial={{opacity: 0, x: -400 }}
            animate={{opacity: 1, x:0 }}
            transition={{duration: 5.7, type: "spring"}}
            >
                <img src={mammoth}/>
                <div className="eyeBlink"/>
        </motion.div>
    );
};

export default Mammoth;
