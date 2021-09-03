import React, { useState } from 'react'

export default function Gallery(props) {
    const [heroPic, setHeroPic] = useState();
    const [fullScreen, setFullScreen] = useState(false);
    const [height, setHeight] = useState(0);

    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    const toggleFullScreenOn = (event) => {
        event.preventDefault()
        setFullScreen(true)
        setHeight(winScroll)
        setHeroPic(event.currentTarget.src)
    }

    const toggleFullScreenOff = (event) => {
        event.preventDefault()
        setFullScreen(false)
        setHeroPic(null)
        setHeight(null)
    }

    return (
        <div className='gallery'>
            {props.images.map((arrElement, index) => (<img src={arrElement} value={arrElement} onClick={toggleFullScreenOn} alt='matt-dizzle-dev-graphic' key={index} className='gallery-image' />))}
            {
                fullScreen && heroPic  ?
                    <div className='gallery-fullscreen' onClick={toggleFullScreenOff} style={{top:height}}>
                        <img src={heroPic} alt='matt-dizzle-dev-graphic' className='fullscreen-image' />
                    </div> : <></>
            }
        </div>
    )
}
