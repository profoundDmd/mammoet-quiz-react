import React, {useState} from 'react';
import {motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import Button from "../Button/Button";

const QuizIntroText = ({startQuizEvent}) => {

    const [showButton, setShowButton] = useState(false);
    let tw;

    const textDone = () => {
        setShowButton(true);
    }

    const btnClicked = () => {
        tw.deleteAll(120)
    }

    const introText = "Hallo iedereen, welkom op de grote Mammoetquiz van het Vleeshuismuseum. Deze quiz gaat over de mammoet en de tijd waarin de mammoet leefde. Willen jullie een leuke en spannende quiz spelen? Druk op de knop om te starten!"



    return (
        <motion.div className="textIntro">
            <Typewriter
                options={{
                    delay: 65,
                    cursor: " "
                }}
                onInit={(typewriter) => {
                    tw = typewriter;
                    tw.typeString(`${introText}`).callFunction(textDone).start();
                }}

            />
            {showButton && (
                <motion.div
                    initial={{opacity: 0,  y: 200}}
                    animate={{opacity: 1,  y: 0}}
                    transition={{duration: 1}}
                >
                    <Button text="START" type="stone" clickEvent={btnClicked}/>
                </motion.div>
            )}

        </motion.div>
    );
};

export default QuizIntroText;
