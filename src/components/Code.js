import React from 'react'
import Card from './Card'

export default function Code() {
    return (
        <div>
            <Card title='Saneful' paragraph='Created using Node.js, React, Express and Postgres'/>
            <Card rev = 'reverse' title='Saneful' paragraph='Created using Node.js, React, Express and Postgres'/>
            <Card title='Saneful' paragraph='Created using Node.js, React, Express and Postgres'/>
            <Card rev = 'reverse' paragraph='Created using Node.js, React, Express and Postgres'/>
        </div>
    )
}
