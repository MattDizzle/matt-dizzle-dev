import React from 'react'
import Card from './Card'

const Home = () => {

    const skillsIcon = <>
        <img alt='react logo' src="https://img.icons8.com/office/100/000000/react.png"/>
        <img alt='nodejs logo' src="https://img.icons8.com/color/100/000000/nodejs.png"/>
        <img alt='adobe logo' src="https://img.icons8.com/ios-filled/50/000000/adobe-logo.png"/>
        <img alt='photoshop logo' src="https://img.icons8.com/ios-glyphs/60/000000/adobe-photoshop.png"/>
    </>
    return (
        <section>
            <Card 
            source='https://source.unsplash.com/collection/10649550' 
            title='about me' 
            paragraph="My name is Matthew and I live in Rialto, California. I'm an aspiring full stack web developer.
             I love music, basketball, learning and computers. I recently did an Internship at Eide Bailly were I learned
              a ton of stuff about Integrating Multiple systems using a combination of Boomi and SuiteScript 2.0.
               Prior to this Internship I graduated from the Engineering Immersion Program were I learned Full-Stack Web
                Development using PostgreSQL, Express, React and Node.js through hands on learning, building multiple apps. "
            id='about-me' />
            <Card source='https://source.unsplash.com/collection/1773435' rev='reverse' title='skills' paragraph='' iconz={skillsIcon} id='skills' />
        </section>

    )
}

export default Home