import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

export default function Contact() {

    let twitch_hosted = 'https://github.com/MattDizzle/favicon-host/blob/master/matt-dizzle-dev/www.twitch.tv_dizzlethedestroyer.png?raw=true'
    return (
        <section className='contact-form-page' id='contact'>
            <div className='image-phone'>
                <img src={twitch_hosted} className='contact-pic' alt='matt dizzle dev' />

        <a target="_blank"
            className='amazon_link'
            rel="noreferrer"
href="https://www.amazon.com/b?_encoding=UTF8&tag=mattdizzledev-20&linkCode=ur2&linkId=fa4d459b812d1541e3bec0d35cc5210e&camp=1789&creative=9325&node=172282"
            
            >
            <FontAwesomeIcon className='icon' id='link_icon' icon={faLink} /> 
            Tap here to go to Amazon 
            </a>

            </div>

        </section>
    )
}
