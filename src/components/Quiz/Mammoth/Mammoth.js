import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import mammoth from "../../../assets/images/mammoth.png";

const Mammoth = () => {
    return (
        <div>
            <AnimatePresence>
                <motion.div>
                    <img src={mammoth}/>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Mammoth;
