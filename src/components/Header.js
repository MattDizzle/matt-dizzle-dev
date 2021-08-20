import React from 'react'
import ReactDOM from 'react-dom'
import logo from '../images/matt-dizzle-dev-logo.png'
import hamburger from '../images/menu-button.png'


export default (props) => {
    return (
    <header>
        <img src={logo} alt="Logo" />
        <h1>Matt Dizzle Dev</h1>
        <div className='menu'>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
    </header>
    )
}
