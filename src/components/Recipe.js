import React from 'react'

const Recipe  = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.colories}</p>
            <img src={props.src} alt={props.title}></img>
        </div>
    )
}

export default Recipe;