import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

export default function CodeCard(props) {
    
    return (
        <section className={`card animate__animated animate__backInUp ${props.rev}`}>
            <a href={props.liveLink}><img src= {props.source} className='card-pic' alt='some text' target="_blank" /></a>
            <div className='card-text-box'>
            <h2>{props.title} <a href={props.codeLink} className='code-link' target="_blank"><FontAwesomeIcon icon={faCode}/></a></h2>
            <p>{props.paragraph}</p>
            </div>
        </section>
    )
}
