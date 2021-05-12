import React from 'react';

const ColorfulWord = ({textColor, color, word}) => {
    const style = { 
        color: textColor,
        backgroundColor: color
    }

    return (
        <div>
            <h1 style={style}>{word}</h1>
        </div>
    );
};

export default ColorfulWord;