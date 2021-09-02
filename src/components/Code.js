import React from 'react'
import CodeCard from './CodeCard'

export default function Code() {
    return (
        <div>
            <CodeCard source='https://raw.githubusercontent.com/MattDizzle/favicon-host/master/saneful/gameview.JPG' title='Saneful' paragraph='Created using Node.js, React, Express and Postgres'/>
            <CodeCard source='https://github.com/M-Sayer/spaced-repetition/blob/master/screenshots/Dash.JPG?raw=true' rev = 'reverse' title='Spaced Repetition' paragraph='Created using Node.js, React, Express and Postgres'/>
            <CodeCard source='https://raw.githubusercontent.com/thinkful-ei-panda/mattr-capstone1-client/master/screenshots/Elections.JPG' title='My Poll Data' paragraph='Created using Node.js, React, Express and Postgres'/>
            <CodeCard source='https://github.com/MattDizzle/weatherwatch-client/blob/main/Screenshots/Home.JPG?raw=true' rev = 'reverse' title='Weather Watch' paragraph='Created using Node.js and React'/>
        </div>
    )
}
