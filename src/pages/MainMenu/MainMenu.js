import React, {useState} from 'react';
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import "./MainMenu.scss"

const MainMenu = ({mainMenuMarginTop}) => {
    const animationEnded = () => {
        console.log("ended!");
    }

    return (
        <div className="mainMenu" style={{marginTop: mainMenuMarginTop}} onAnimationEnd={animationEnded}>
            <Title text="Menu" size="big"/>
            <div className="menuButtons">
                <Button text="Home" type="stone" clickEvent={() => console.log("")}/>
                <Button text="Microscoop" type="stone" clickEvent={() => console.log("")} />
                <Button text="Quiz" type="wood" clickEvent={() => console.log("")} />
            </div>
        </div>
    );
};

export default MainMenu;
