import React from 'react'
import './Components.css'

const HeaderElement = (props) =>{
return (
    <div className={props.className}>
    {props.imageSrc && <div className='logoImage-div'><img src={props.imageSrc} alt='spacefilled' ></img></div>}
     <p>{props.topics}</p>
     </div>
)

}

export default HeaderElement;

