import React from 'react';

const Number_or_Word = (props) => {
    return (
        isNaN(props.num_or_word) ?
        <h1>The word is: {props.num_or_word}</h1> :
        <h1>The number is: {props.num_or_word}</h1>
    );
};

export default Number_or_Word;