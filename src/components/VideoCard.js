import React from 'react'

export default function VideoCard(props) {

    return (
        <section className={`video-card animate__animated animate__backInUp ${props.rev}`}>
            <iframe src={props.source} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className='card-text-box'>
            <h2>{props.title}</h2>
            <p>  Sunt eu non et ut est. Nisi quis ea velit dolor aliqua pariatur sit esse magna cillum occaecat. Cupidatat id proident aliqua non. Duis non exercitation veniam minim amet cillum excepteur ipsum nisi do adipisicing. Cupidatat id sint excepteur sunt laboris. Irure exercitation anim Lorem sunt quis tempor consectetur mollit. Enim cillum cillum occaecat culpa excepteur qui.   </p>
            </div>
        </section>
    )
}
