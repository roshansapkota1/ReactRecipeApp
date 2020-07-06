import React from 'react'
import './Components.css'

const Image = (prop)  => {
    return <img className='div-image' src={prop.imageSrc} alt={prop.alt}></img>
}

export default Image

