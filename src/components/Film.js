import React, { useState, useEffect } from 'react'
import VideoCard from './VideoCard'



export default function Film() {
    const [data, setData] = useState();
    useEffect(() => {
        const options = {
            // These properties are part of the Fetch Standard
            method: 'GET',
            headers: { },            // Request headers. format is the identical to that accepted by the Headers constructor (see below)
            body: null,             // Request body. can be null, a string, a Buffer, a Blob, or a Node.js Readable stream
            redirect: 'follow',     // Set to `manual` to extract redirect headers, `error` to reject redirect
            signal: null,           // Pass an instance of AbortSignal to optionally abort requests

            // The following properties are node-fetch extensions
            follow: 20,             // maximum redirect count. 0 to not follow redirect
            compress: true,         // support gzip/deflate content encoding. false to disable
            size: 0,                // maximum response body size in bytes. 0 to disable
            agent: null,            // http(s).Agent instance or function that returns an instance (see below)
            highWaterMark: 16384,   // the maximum number of bytes to store in the internal buffer before ceasing to read from the underlying resource.
            insecureHTTPParser: false	// Use an insecure HTTP parser that accepts invalid HTTP headers when `true`.
        }

        const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_KEY}&channelId=UCOlyZUgsap7nTfX6XsnqUSw&part=id,snippet&order=date&maxResults=20\n`

        fetch(url, options)
            .then(response => response.json())
            .then(response => setData(response));
    }, []);

    return (
        <div className='film'>
            {
            data != null ?
             data.items.map((item, i) =>
                <VideoCard 
                style={{ color: 'blue' }} 
                key={i} 
                source={`https://www.youtube.com/embed/${item.id.videoId}`} 
                title={item.snippet.title} description={item.snippet.description} 
                />) 
                : 'Loading...'
            }
        </div>
    )
}
