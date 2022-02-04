import React from 'react';
import Webcam from "react-webcam";
import "./Microscope.scss"
import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";


const Microscope = () => {
    const navigate = useNavigate();

    const goToMainMenu = () => {
        navigate("/mainmenu");
    }

    return (
        <div className="microscope">
            <motion.div
                initial={{marginLeft: -15, opacity: 0,  }}
                animate={{marginLeft: 0, opacity: 1,  }}
                exit={{marginLeft: -15, opacity: 0, }}
                transition={{duration: .6}}
                className="microscopeParts"
            >
                <Webcam className="microscopeCam"/>
            </motion.div>

            <motion.div
                initial={{marginBottom: -20, opacity: 0,  }}
                animate={{marginBottom: 0, opacity: 1,  }}
                exit={{marginBottom: -20, opacity: 0, }}
                transition={{duration: .6}}
                className="microscopeParts microscopeButton"
            >
                <Button text="Terug" type="stone" clickEvent={goToMainMenu} />

            </motion.div>
        </div>
    );
};

export default Microscope;
