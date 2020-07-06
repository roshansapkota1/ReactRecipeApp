import React from 'react'
import './Components.css'  


const Recipe  = (props) => {
    let ingredients = props.ingredients;
    return (
        <div className='recipe-divs'>
            <h1>{props.title}</h1>
            <div className="image-div">
            <img src={props.src} alt={props.title}></img>
            </div>
            <h2>{props.calorie}</h2>
            {ingredients.map((any) =>{return (
                <div>
                <p>{any.text} : {any.weight} grams</p>
                
                </div>
            )})}


        </div>
    )
}

export default Recipe;