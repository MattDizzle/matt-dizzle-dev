import React from 'react'
import Card from './Card'
import business from '../images/business.svg'
import monitor from '../images/monitor.svg'

const Home = () => {

    const skillsIcon = <>
        <img className='skills-logos' alt='photoshop logo' src="https://github.com/MattDizzle/favicon-host/blob/master/icons/express.png?raw=true" />
        <img className='skills-logos' alt='photoshop logo' src="https://raw.githubusercontent.com/MattDizzle/favicon-host/master/icons/postgresql.svg" />
        <img className='skills-logos' alt='react logo' src="https://raw.githubusercontent.com/MattDizzle/favicon-host/master/icons/react.svg" />
        <img className='skills-logos' alt='nodejs logo' src="https://raw.githubusercontent.com/MattDizzle/favicon-host/master/icons/node-js.svg" />
        <img className='skills-logos' alt='photoshop logo' src="https://raw.githubusercontent.com/MattDizzle/favicon-host/master/icons/mongodb.svg" />
        <img className='skills-logos' alt='heroku logo' src="https://raw.githubusercontent.com/MattDizzle/favicon-host/ff109f163c42493f609a773a0be30156fb7ab674/icons/github%20(2).svg" />
        <img className='skills-logos' alt='heroku logo' src="https://raw.githubusercontent.com/MattDizzle/favicon-host/master/icons/heroku.svg" />
        <img className='skills-logos' alt='photoshop logo' src="https://raw.githubusercontent.com/MattDizzle/favicon-host/master/office-365-1/svg/microsoft-terms-and-office-1194339.svg" />
        <img className='skills-logos' alt='photoshop logo' src="https://raw.githubusercontent.com/MattDizzle/favicon-host/44b0a755b5023eabcc2d213523ace74b8c7edb39/adobe-creative-cloud/svg/adobe-129901.svg" />
        <img className='skills-logos' alt='photoshop logo' src="https://raw.githubusercontent.com/MattDizzle/favicon-host/44b0a755b5023eabcc2d213523ace74b8c7edb39/adobe-creative-cloud/svg/adobe-129913.svg" />
        <img className='skills-logos' alt='photoshop logo' src="https://raw.githubusercontent.com/MattDizzle/favicon-host/44b0a755b5023eabcc2d213523ace74b8c7edb39/adobe-creative-cloud/svg/adobe-129894.svg" />
        <img className='skills-logos' alt='photoshop logo' src="https://raw.githubusercontent.com/MattDizzle/favicon-host/44b0a755b5023eabcc2d213523ace74b8c7edb39/adobe-creative-cloud/svg/adobe-129897.svg" />
    </>
    return (
        <section className='home-page'>
            <Card
                card='home-card'
                source={business}
                title='ABOUT ME'
                paragraph="My name is Matthew and I live in Southern California. I'm an aspiring full stack web developer.
             I love music, basketball, learning and computers. I recently did an Internship at Eide Bailly where I learned
              a ton of stuff about Integrating Multiple systems using a combination of Boomi and SuiteScript 2.0.
               Prior to this Internship I graduated from the Engineering Immersion Program where I learned Full-Stack Web
                Development using PostgreSQL, Express, React and Node.js through hands on learning, building multiple apps. "
                id='about-me' />
            <Card card='home-card' source={monitor} rev='reverse' title='SKILLS' paragraph='' iconz={skillsIcon} id='skills' />
        </section>

    )
}

export default Home