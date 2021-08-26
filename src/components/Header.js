import React from 'react'
import ReactDOM from 'react-dom'
import logo from '../images/matt-dizzle-dev-logo.png'
import hamburger from '../images/menu-button.png'


export default (props) => {
    return (
    <header>
        <img src={logo} alt="Logo" />
        <h1>Matt Dizzle Dev</h1>
        <section className='menu'>
        <div className='links'>
            <h3 className='link'>Coding</h3>
            <h3 className='link'>Videos</h3>
            <h3 className='link'>Graphics</h3>
        </div>

        <div className='ham'> 
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>   
        </section>
    </header>
    )
}
