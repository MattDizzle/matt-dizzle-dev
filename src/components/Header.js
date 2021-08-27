import React from 'react'
import ReactDOM from 'react-dom'
import logo from '../images/matt-dizzle-dev-logo.png'
import hamburger from '../images/menu-button.png'
import { Switch, Route, Link } from "react-router-dom";



export default (props) => {
    const openMenu = () => console.log(`I should be a menu`)
    return (
        <header>
            <Link to='/' ><img src={logo} alt="Logo" id='header-logo' /></Link>
            <h1>Matt Dizzle Dev</h1>
            <section className='menu'>
                <div className='links'>
                    <h3 className='link'>Coding</h3>
                    <h3 className='link'>Videos</h3>
                    <h3 className='link'>Graphics</h3>
                </div>
                <Link to='/menu' id='header-ham'>
                <div className='ham' onClick={openMenu}>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                </div>
                </Link>
            </section>
        </header>
    )
}
