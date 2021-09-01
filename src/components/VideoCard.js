import React from 'react'


export default function VideoCard(props) {

    return (
        <section className={`video-card animate__animated animate__backInUp ${props.rev}`}>
            <iframe src={props.source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className='card-text-box'>
                <h2>{props.title}</h2>
            </div>
        </section>
    )
}
