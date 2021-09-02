import React from 'react'

export default function CodeCard(props) {
    
    return (
        <section className={`card animate__animated animate__backInUp ${props.rev}`}>
            <img src= {props.source} className='card-pic' alt='some text' />
            <div className='card-text-box'>
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
            </div>
        </section>
    )
}
