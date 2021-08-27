import React from 'react'
import logo from '../images/matt-dizzle-dev-logo.png'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to='/' ><img src={logo} alt="Logo" id='header-logo' /></Link>
            <h1>Matt Dizzle Dev</h1>
            <section className='menu'>
                <div className='links'>
                    <Link to='film' className='link'>Videos</Link>
                    <Link to='code' className='link'>Coding</Link>
                    <Link to='graphics' className='link'>Graphics</Link>
                </div>
            </section>
        </header>
    )
}

export default Header