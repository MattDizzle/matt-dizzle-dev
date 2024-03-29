import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

export default function Contact() {



    return (
        <section className='contact-form-page' id='contact' style={{display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection:'column', width: '60%'}}>
            <div className='image-phone'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rfEkuZgDhnc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <a target="_blank"
            className='amazon_link'
            rel="noreferrer"
href="https://www.amazon.com/b?_encoding=UTF8&tag=mattdizzledev-20&linkCode=ur2&linkId=fa4d459b812d1541e3bec0d35cc5210e&camp=1789&creative=9325&node=172282"
            
            >
            <FontAwesomeIcon className='icon' id='link_icon' icon={faLink} /> 
            Tap here to go to Amazon 
            </a>

            </div>

            <section style={{display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection:'column', background:'white', padding:'1%'}}>
                <h1>Matt Dizzle's Wish List</h1>
                <h3>Coming Soon</h3>
            </section>

        </section>
    )
}
