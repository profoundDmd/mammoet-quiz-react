import React from 'react';
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

const MainMenu = () => {
    return (
        <div className="mainMenu">
            <Title text="Menu" size="big"/>
            <div className="buttons">
                <Title text="Menu" size="large"/>
                <Button text="Home" type="stone"/>
                <Button text="Microscoop" type="stone"/>
                <Button text="Quiz" type="wood"/>
            </div>
        </div>
    );
};

export default MainMenu;
