import React, { useState, useEffect } from 'react'
import VideoCard from './VideoCard'

export default function Film() {
    const [data, setData] = useState();
    const [error, setError] = useState();
    useEffect(() => {
        const options = {
            // These properties are part of the Fetch Standard
            method: 'GET',
            mode: 'cors',
            headers: {
                 
             },            // Request headers. format is the identical to that accepted by the Headers constructor (see below)
            body: null,             // Request body. can be null, a string, a Buffer, a Blob, or a Node.js Readable stream
            redirect: 'follow',     // Set to `manual` to extract redirect headers, `error` to reject redirect
            signal: null,  
                  

            // The following properties are node-fetch extensions
            follow: 5,
            compress: true,
            size: 0,
            agent: null,
            highWaterMark: 16384,
            insecureHTTPParser: false
        }

        const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_KEY}&channelId=UCOlyZUgsap7nTfX6XsnqUSw&part=id,snippet&order=date&maxResults=20\n`

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
            <h2 style={{color: 'red'}}>{
                error
            }</h2>

            {
                data != null ?
                    data.items.map((item, i) =>
                        <VideoCard
                            style={{ color: 'blue' }}
                            key={i}
                            source={`https://www.youtube.com/embed/${item.id.videoId}`}
                            title={item.snippet.title} description={item.snippet.description}
                        />)
                    : <h2 style={{color: 'blue'}}>'Loading...'</h2>
            }
        </div>
    )
}
