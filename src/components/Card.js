import React from 'react'

export default function Card(props) {
    let sourceCollection = 'https://source.unsplash.com/collection/1459961'

    return (
        <section className={`card animate__animated animate__backInUp ${props.rev}`}>
            <img src= {sourceCollection} className='car-pic' alt='some text' />
            <div className='card-text-box'>
            <h2>{props.title}</h2>
            <p>  Sunt eu non et ut est. Nisi quis ea velit dolor aliqua pariatur sit esse magna cillum occaecat. Cupidatat id proident aliqua non. Duis non exercitation veniam minim amet cillum excepteur ipsum nisi do adipisicing. Cupidatat id sint excepteur sunt laboris. Irure exercitation anim Lorem sunt quis tempor consectetur mollit. Enim cillum cillum occaecat culpa excepteur qui.   </p>
            </div>
        </section>
    )
}
