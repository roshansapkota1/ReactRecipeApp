import React from 'react'
import HeaderElement from './HeaderElement'
import './Components.css'

const Header = ( ) => {
    const normalClassName = 'header-element'
    const classNameHome = 'header-element-home'
    return (
        <div className='header'>
            <HeaderElement topics='Home' className={classNameHome} imageSrc={'https://i7.pngguru.com/preview/435/519/801/pizza-napoli-cafe-fast-food-restaurant-menu-dining-knife-and-fork-cartoon-logo.jpg'}/>
            <HeaderElement topics='About Us' className={normalClassName}/>
            <HeaderElement topics='Contact' className={normalClassName}/>
            <HeaderElement topics='Other information' className={normalClassName}/>
        </div>
    )
}

export default Header;