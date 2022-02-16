import React, {useState} from 'react';
import {motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import Button from "../Button/Button";

const QuizIntroText = ({setShowText}) => {

    const [showButton, setShowButton] = useState(false);

    const textDone = () => {
        setShowButton(true);
    }

    const startClicked = () => {
        setShowText((showText) => !showText);
    }

    const introText = "Hallo iedereen, welkom op de grote Mammoetquiz van het Vleeshuismuseum. Deze quiz gaat over de mammoet en de tijd waarin de mammoet leefde. Willen jullie een leuke en spannende quiz spelen? Druk op de knop om te starten!"

    return (
        <motion.div className="textIntro" exit={{ opacity: 0, transition: {duration: 2.5}}}>
            <Typewriter
                options={{
                    delay: 65,
                    cursor: " "
                }}
                onInit={(typewriter) => {
                    typewriter.typeString(`${introText}`).callFunction(textDone).start();
                }}
            />

            {showButton && (
                <motion.div
                    initial={{opacity: 0,  y: 250}}
                    animate={{opacity: 1,  y: 0}}
                    transition={{duration: 0.7, type: "spring"}}
                >
                    <Button text="START" type="stone" clickEvent={startClicked}/>
                </motion.div>
            )}

        </motion.div>
    );
};

export default QuizIntroText;
