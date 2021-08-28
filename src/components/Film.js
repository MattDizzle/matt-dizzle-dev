import React from 'react'
import VideoCard from './VideoCard'

export default function Film() {
    return (
        <div className='film'>
            <VideoCard source="https://www.youtube.com/embed/YpXLswNsZqY" title='Reactiv Solutions' paragraph='Created using Node.js, React, Express and Postgres'/>
            <VideoCard source="https://www.youtube.com/embed/YpXLswNsZqY" title='Matt Dizzle Dev' paragraph='Created using Node.js, React, Express and Postgres'/>
            <VideoCard source="https://www.youtube.com/embed/YpXLswNsZqY" title='Pig Latin Encoder' paragraph='Created using Node.js, React, Express and Postgres'/>
            <VideoCard source="https://www.youtube.com/embed/YpXLswNsZqY" title='Ultimate Coding Challenge' paragraph='Created using Node.js, React, Express and Postgres'/>
        </div>
    )
}
