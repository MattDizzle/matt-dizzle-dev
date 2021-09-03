import React, { useState, useEffect } from 'react'
import LoadingComponents from '../LoadingScreen/LoadingComponents'

export default function Film() {
    const [data, setData] = useState();
    const [error, setError] = useState();
    useEffect(() => {
        const options = {
            method: 'GET',
            mode: 'cors',
            headers: {}, 
            body: null,            
            redirect: 'follow',

            signal: null,
            follow: 5,
            compress: true,
            size: 0,
            agent: null,
            highWaterMark: 16384,
            insecureHTTPParser: false
        }

        const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_KEY}&channelId=UCOlyZUgsap7nTfX6XsnqUSw&part=id&order=date&maxResults=20\n`

        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(response => setData(response))
            .catch(error => setError(error.message));
    }, []);

    return (
        <div className='film'>
            <h2 style={{ color: 'red' }}>{ error }</h2>

            {
                data != null ? data.items.map((item, i) => <iframe className='video-card' width="100%" height="315" src={`https://www.youtube.com/embed/${item.id.videoId}`} title={item.id.videoId + i} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
                : <LoadingComponents />
            }
            
        </div>
    )
}
