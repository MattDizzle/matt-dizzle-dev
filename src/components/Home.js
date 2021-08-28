import React from 'react'
import Card from './Card'

const Home = () => {

    const skillsIcon = <>
        <img src="https://img.icons8.com/office/100/000000/react.png"/>
        <img src="https://img.icons8.com/color/100/000000/nodejs.png"/>
        <img src="https://img.icons8.com/ios-filled/50/000000/adobe-logo.png"/>
        <img src="https://img.icons8.com/ios-glyphs/60/000000/adobe-photoshop.png"/>
    </>
    return (
        <section>
            <Card source='https://source.unsplash.com/collection/10649550' title='about me' paragraph='lorem ipsum and thangs for now just rambling' id='about-me' />
            <Card source='https://source.unsplash.com/collection/1773435' rev='reverse' title='skills' paragraph='' iconz={skillsIcon} id='skills' />
            <Card source='https://source.unsplash.com/collection/8354564' title='passions' paragraph='lorem ipsum and thangs for now just rambling' id='passions' />
            <Card source='https://source.unsplash.com/collection/6221583' rev='reverse' title='how I learned stuff' paragraph='lorem ipsum and thangs for now just rambling' />
        </section>

    )
}

export default Home