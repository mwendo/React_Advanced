import React from 'react';

const ColorfulWord = ({textColor, color}) => {
    const style = { 
        color: textColor,
        backgroundColor: color
    }

    return (
        <div>
            <h1 style={style}>hello</h1>
        </div>
    );
};

export default ColorfulWord;