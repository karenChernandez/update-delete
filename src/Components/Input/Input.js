import React from 'react';


export default function Input(props){
console.log("Input -> props", props)
return(
    <input  type={props.type} value={props.value} placeholder={props.placeholder} onChange={event => props.handler(event.target.value)}></input>
    
    )
}