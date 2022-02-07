import React, {useState} from 'react';
import {motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import Button from "../Button/Button";

const QuizIntroText = ({startQuizEvent}) => {

    const [showButton, setShowButton] = useState(false);

    const textDone = () => {
        setShowButton(true);
    }

    return (
        <motion.div className="textIntro">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Hello Worldies!')
                        .callFunction(textDone)
                        .start();
                }}
            />
            {showButton && (
                <motion.div
                    initial={{opacity: 0,  y: 200}}
                    animate={{opacity: 1,  y: 0}}
                    transition={{duration: 1}}
                >
                    <Button text="START" type="stone" clickEvent={startQuizEvent}/>
                </motion.div>
            )}

        </motion.div>
    );
};

export default QuizIntroText;
