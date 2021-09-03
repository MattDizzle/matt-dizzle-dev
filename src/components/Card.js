import React from 'react'

export default function Card(props) {
    
    return (
        <section className={`${props.card} animate__animated animate__backInUp ${props.rev}`}>
            <img src= {props.source} className='home-card-pic' alt='some text' />
            <div className='home-card-text-box'>
            <h2 className='home-h2'>{props.title}</h2>
            <div className='icon-box'>
            {props.iconz}
            </div>
            <p className='home-p'>{props.paragraph}</p>
            </div>
        </section>
    )
}
