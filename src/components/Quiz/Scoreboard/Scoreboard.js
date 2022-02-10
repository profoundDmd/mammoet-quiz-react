import React from 'react';
import {motion} from "framer-motion";
import scoreBoard from "../../../assets/images/smallFrame.png";

const Scoreboard = () => {
    return (
        <motion.div>
            <img src={scoreBoard}/>
        </motion.div>
    );
};

export default Scoreboard;
