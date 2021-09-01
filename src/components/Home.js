import React from 'react'
import Card from './Card'

const Home = () => {

    const skillsIcon = <>
        <img alt='photoshop logo' src="https://github.com/MattDizzle/favicon-host/blob/master/icons/psql3.png?raw=true" />
        <img alt='photoshop logo' src="https://github.com/MattDizzle/favicon-host/blob/master/icons/ExpressJS.png?raw=true" />
        <img alt='react logo' src="https://img.icons8.com/office/100/000000/react.png" />
        <img alt='nodejs logo' src="https://img.icons8.com/color/100/000000/nodejs.png" />
        <img alt='photoshop logo' src="https://github.com/MattDizzle/favicon-host/blob/master/icons/mongo-db-logo.png?raw=true" />
        <img alt='heroku logo' src="https://raw.githubusercontent.com/MattDizzle/favicon-host/ff109f163c42493f609a773a0be30156fb7ab674/icons/github%20(2).svg" />
        <img alt='heroku logo' src="https://github.com/MattDizzle/favicon-host/blob/master/icons/heroku-logo-1.png?raw=true" />
        <img alt='photoshop logo' src="https://raw.githubusercontent.com/MattDizzle/favicon-host/44b0a755b5023eabcc2d213523ace74b8c7edb39/adobe-creative-cloud/svg/adobe-129901.svg" />
        <img alt='photoshop logo' src="https://raw.githubusercontent.com/MattDizzle/favicon-host/44b0a755b5023eabcc2d213523ace74b8c7edb39/adobe-creative-cloud/svg/adobe-129913.svg" />
        <img alt='photoshop logo' src="https://raw.githubusercontent.com/MattDizzle/favicon-host/44b0a755b5023eabcc2d213523ace74b8c7edb39/adobe-creative-cloud/svg/adobe-129894.svg" />
        <img alt='photoshop logo' src="https://raw.githubusercontent.com/MattDizzle/favicon-host/44b0a755b5023eabcc2d213523ace74b8c7edb39/adobe-creative-cloud/svg/adobe-129897.svg" />
        <img alt='photoshop logo' src="https://github.com/MattDizzle/favicon-host/blob/master/icons/Outlook-Emblem.png?raw=true" />

        {/* <img alt='photoshop logo' src=""/> */}

    </>
    return (
        <section>
            <Card
                source='https://source.unsplash.com/collection/10649550'
                title='about me'
                paragraph="My name is Matthew and I live in Rialto, California. I'm an aspiring full stack web developer.
             I love music, basketball, learning and computers. I recently did an Internship at Eide Bailly where I learned
              a ton of stuff about Integrating Multiple systems using a combination of Boomi and SuiteScript 2.0.
               Prior to this Internship I graduated from the Engineering Immersion Program where I learned Full-Stack Web
                Development using PostgreSQL, Express, React and Node.js through hands on learning, building multiple apps. "
                id='about-me' />
            <Card source='https://source.unsplash.com/collection/1773435' rev='reverse' title='skills' paragraph='' iconz={skillsIcon} id='skills' />
        </section>

    )
}

export default Home