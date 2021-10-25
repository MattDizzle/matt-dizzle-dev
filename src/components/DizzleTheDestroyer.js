import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import twitch from '../images/www.twitch.tv_dizzlethedestroyer.png'

library.add(fab)

export default function Contact() {
    return (
        <section className='contact-form-page' id='contact'>
            <div className='image-phone'>
                <img src={twitch} className='contact-pic' alt='matt dizzle dev' />

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
