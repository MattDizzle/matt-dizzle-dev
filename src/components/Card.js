import React from 'react'

export default function Card(props) {
    
    return (
        <section className={`card animate__animated animate__backInUp ${props.rev}`}>
            <img src= {props.source} className='card-pic' alt='some text' />
            <div className='card-text-box'>
            <h2>{props.title}</h2>
            <div className='icon-box'>
            {props.iconz}
            </div>
            <p>{props.paragraph}</p>
            </div>
        </section>
    )
}
