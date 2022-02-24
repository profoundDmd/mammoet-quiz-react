import React from 'react';
import {motion} from "framer-motion";
import ribbonBg from "../../../assets/images/titleWood.png";
import "./Ribbon.scss";

const Ribbon = ({text, classNames}) => {
    return (
        <motion.div className={`ribbon ${classNames}`}>
            <img src={ribbonBg} className="ribbonBg" alt=""/>
            <div className="ribbonText">{text}</div>
        </motion.div>
    );
};

export default Ribbon;
