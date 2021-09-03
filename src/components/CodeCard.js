import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

export default function CodeCard(props) {
    
    return (
        <section className={`${props.card} animate__animated animate__backInUp ${props.rev}`}>
            <a href={props.liveLink} target="_blank" rel="noreferrer"><img src= {props.source} className='code-card-pic' alt='some text' /></a>
            <div className='code-card-text-box'>
            <h2 className='code-h2'>{props.title} <a href={props.codeLink} className='code-link' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode}/></a></h2>
            <p className='code-p'>{props.paragraph}</p>
            </div>
        </section>
    )
}
