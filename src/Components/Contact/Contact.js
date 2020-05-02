import React from 'react';


export default function Contact(props){
console.log('PROPS?', props)
    return(
        
        <div key={props.id}>
            <h1>{props.name}</h1>
            <h1>{props.phoneNumber}</h1>
            <h1>{props.email}</h1>
            <button onClick={() => props.delete(props.id)}>Delete</button>
            <button onClick={() => props.update(props.id)}>Update</button>
        </div>
    )
}