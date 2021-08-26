import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faFilm, faImages, faCode, faHome, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Switch, Route, Link } from "react-router-dom";

export default (props) => {
    return (
        <div className='nav'>
            
            <Link to='/'><FontAwesomeIcon className='icon' icon={faHome} /></Link>
            <Link to='code'><FontAwesomeIcon className='icon' icon={faCode} className='nav-link' /></Link>
            <Link to='/film'><FontAwesomeIcon className='icon' icon={faFilm} /></Link>
            <Link to='/graphics'><FontAwesomeIcon className='icon' icon={faImages} /></Link>
            <Link to='/contact'><FontAwesomeIcon className='icon' icon={faAddressCard} /></Link>
            
            
        </div>
    )
}
