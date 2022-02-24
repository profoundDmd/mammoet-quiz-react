import React, {useState} from 'react';
import {motion} from "framer-motion";
import "./Scoreboard.scss";
import Button from "../../../components/Button/Button";
import {useNavigate} from "react-router-dom";

const Scoreboard = ({setShowQuestionCounter, showScoreboard}) => {

    const [disabledClass, setDisabledClass] = useState("disabled");

    const navigate = useNavigate();

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
                <Button text="STOP" type="stone" className={`stopQuiz ${disabledClass}`} clickEvent={endQuiz}/>
            </motion.div>
            )}
        </>
    );
};

export default Scoreboard;
