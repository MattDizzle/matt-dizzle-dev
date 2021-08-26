import React, { PureComponent } from 'react'
import Card from './Card'

export default function Film(props) {
    return (
        <div>
            <Card title='Reactiv Solutions' paragraph='Created using Node.js, React, Express and Postgres'/>
            <Card title='Ultimate Coding Challenge' paragraph='Created using Node.js, React, Express and Postgres'/>
            <Card title='Matt Dizzle Dev' paragraph='Created using Node.js, React, Express and Postgres'/>
            <Card title='Pig Latin Encoder' paragraph='Created using Node.js, React, Express and Postgres'/>
        </div>
    )
}
