import React from 'react';
import './Parameter.css';

const Parameter = (props) => {
    let s = "";
    if (props.type==="Height"){
        s = "cms";
    }
    else if(props.type==="Weight"){
        s = "kgs";
    }
    return(
        <div className="Parameter"> 
            <div><b>Enter {props.type}: </b><input type='number' onChange={props.change} value={props.val} max="250" min="0"/></div>
            <div>Your {props.type}: {props.val} {s}</div>
        </div>
    );
}

export default Parameter;