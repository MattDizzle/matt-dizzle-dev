import React from 'react'
import CodeCard from './CodeCard'

export default function Code() {
    return (
        <div>
            <CodeCard codeLink='https://github.com/MattDizzle/Saneful2020-api' liveLink='https://saneful.vercel.app/' source='https://raw.githubusercontent.com/MattDizzle/favicon-host/master/saneful/gameview.JPG' title='Saneful' paragraph='I used PostgreSQL, React, Express, Node.js, HTML5, CSS and Javascript to create this app.'/>
            <CodeCard codeLink='https://github.com/M-Sayer/spaced-repetition' liveLink='https://spaced-repetition-brown.vercel.app/register' source='https://github.com/M-Sayer/spaced-repetition/blob/master/screenshots/Dash.JPG?raw=true' rev = 'reverse' title='Spaced Repetition' paragraph='This project was an exercise in using linked lists. I used PostgreSQL, React, Express, Node.js, HTML5, CSS and Javascript to create this app.'/>
            <CodeCard codeLink='https://github.com/MattDizzle/mattr-capstone1-server' liveLink='https://my-poll-data-client.vercel.app/Home' source='https://raw.githubusercontent.com/thinkful-ei-panda/mattr-capstone1-client/master/screenshots/Elections.JPG' title='My Poll Data' paragraph='I used PostgreSQL, React, Express, Node.js, HTML5, CSS and Javascript to create this app.'/>
            <CodeCard codeLink='https://github.com/MattDizzle/weatherwatch-client' liveLink='https://weatherwatch.club/' source='https://github.com/MattDizzle/weatherwatch-client/blob/main/Screenshots/Home.JPG?raw=true' rev = 'reverse' title='Weather Watch' paragraph='I designed the logo and the app using the adobe suite. I deployed using Vercel. I used PostgreSQL, React, Express, Node.js, HTML5, CSS and Javascript to create this app.'/>
        </div>
    )
}
