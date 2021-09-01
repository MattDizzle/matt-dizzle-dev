import React from 'react'
import ContactForm from './ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

export default function Contact() {
    return (
        <section className='contact-form-page' id='contact'>
            <div className='image-phone'>
                <img src='https://github.com/MattDizzle/favicon-host/blob/master/matt-dizzle-dev.JPG?raw=true' className='contact-pic' alt='matt dizzle dev' />
                <a href="tel:+19095479183" id='phone-link'><FontAwesomeIcon className='icon' icon={faPhone}/> Call Me </a>
            </div>
            <ContactForm />
        </section>
    )
}
