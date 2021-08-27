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
                    <h3 className='link'>Coding</h3>
                    <h3 className='link'>Videos</h3>
                    <h3 className='link'>Graphics</h3>
                </div>
            </section>
        </header>
    )
}

export default Header