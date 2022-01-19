import React from 'react';

const Title = ({text, size}) => {
    const classNameSize = () => {
        if(size === "small"){
            return "smallTitle";
        }else if(size === "medium"){
            return "mediumTitle";
        }else if(size === "large"){
            return "largeTitle";
        }else{
            return "";
        }
    };

    return (
        <div className={"title " + classNameSize()}>
            {text}
        </div>
    );
};

export default Title;
