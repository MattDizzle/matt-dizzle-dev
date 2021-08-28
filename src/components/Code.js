import React from 'react'
import Card from './Card'

export default function Code() {
    return (
        <div>
            <Card source='https://raw.githubusercontent.com/MattDizzle/favicon-host/master/saneful/gameview.JPG' title='Saneful' paragraph='Created using Node.js, React, Express and Postgres'/>
            <Card source='https://github.com/M-Sayer/spaced-repetition/blob/master/screenshots/Dash.JPG' rev = 'reverse' title='Spaced Repetition' paragraph='Created using Node.js, React, Express and Postgres'/>
            <Card source='https://github.com/MattDizzle/my-poll-data-client/blob/main/screenshots/Elections.JPG' title='My Poll Data' paragraph='Created using Node.js, React, Express and Postgres'/>
            <Card source='https://github.com/MattDizzle/weatherwatch-client/blob/main/Screenshots/Home.JPG' rev = 'Weather Watch' paragraph='Created using Node.js and React'/>
        </div>
    )
}
