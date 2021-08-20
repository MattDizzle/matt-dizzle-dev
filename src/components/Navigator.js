import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faFilm, faImages, faBasketballBall, faDatabase, faHome, faSearch } from '@fortawesome/free-solid-svg-icons'

export default (props) => {
    return (
        <div className='nav'>
            <FontAwesomeIcon className='icon'  icon={faHome} />
            <FontAwesomeIcon className='icon'  icon={faFilm} />
            <FontAwesomeIcon className='icon' icon={faImages} />
            {/* <FontAwesomeIcon className='icon' icon={faDatabase} /> */}
            <FontAwesomeIcon icon="fa-solid fa-file-code" />
            <FontAwesomeIcon className='icon' icon={faAddressCard} />
            <FontAwesomeIcon className='icon' icon={faSearch} />
        </div>
    )
}
