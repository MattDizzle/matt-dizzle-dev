import React from 'react'
import VideoCard from './VideoCard'

export default function Film() {
    return (
        <div className='film'>
            <VideoCard source="https://www.youtube.com/embed/YpXLswNsZqY" title='Reactiv Solutions' paragraph='Voiceover and Editing'/>
            <VideoCard source="https://www.youtube.com/embed/Cg7BeuxostM" title='Matt Dizzle Dev: Hashtag Generator' paragraph='Coding Interview Practice'/>
            <VideoCard source="https://www.youtube.com/embed/BmvGcDH88Cs" title='Pig Latin Encoder' paragraph='Coding Interview Practice'/>
        </div>
    )
}
