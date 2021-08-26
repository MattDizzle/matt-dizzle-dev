import React from 'react'

export default (props) => {
    let sourceCollection = 'https://source.unsplash.com/collection/1459961'
    let sourceCollection2 = 'https://source.unsplash.com/random'
    let sourceCollection3 = 'https://source.unsplash.com/daily'
    let sourceCollection4 = Math.floor(Math.random()*10000000)
    console.log(`random number ${sourceCollection4}`)

    return (
        <section className={`card animate__animated animate__backInUp ${props.rev}`}>
            {/* <img className='car-pic' src= {(props.rev ? sourceCollection3 : sourceCollection)}/> */}
            <img src= 'https://source.unsplash.com/random' className='car-pic' />
            <div className='card-text-box'>
            <h2>{props.title}</h2>
            <p>  Sunt eu non et ut est. Nisi quis ea velit dolor aliqua pariatur sit esse magna cillum occaecat. Cupidatat id proident aliqua non. Duis non exercitation veniam minim amet cillum excepteur ipsum nisi do adipisicing. Cupidatat id sint excepteur sunt laboris. Irure exercitation anim Lorem sunt quis tempor consectetur mollit. Enim cillum cillum occaecat culpa excepteur qui.   </p>
            </div>
        </section>
    )
}
