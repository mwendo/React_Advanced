import React from 'react';

const Tabs = (props) => {
    const selectedStyle = {
        backgroundColor: "black",
        color: "white",
    }
    return (
        <div onClick={()=>props.onClickHandler(props.index)} className="border m-3 text-center" style={props.selected ? selectedStyle : {}}>
            <h1>label: {props.label}</h1>
        </div>
    );
};


export default Tabs;