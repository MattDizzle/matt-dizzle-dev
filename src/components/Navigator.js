import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faFilm, faImages, faBasketballBall, faDatabase } from '@fortawesome/free-solid-svg-icons'

export default (props) => {
    return (
        <div className='nav'>
            <FontAwesomeIcon className='icon'  icon={faFilm} />
            <FontAwesomeIcon className='icon' icon={faImages} />
            <FontAwesomeIcon className='icon' icon={faDatabase} />
            <FontAwesomeIcon className='icon' icon={faBasketballBall} />
            <FontAwesomeIcon className='icon' icon={faAddressCard} />
        </div>
    )
}
