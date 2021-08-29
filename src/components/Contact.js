import React from 'react'
import ContactForm from './ContactForm'

export default function Contact() {
    return (
        <section className='contact-form-page' id='contact'>
            <div className='image-phone'>
            <img src= 'https://github.com/MattDizzle/favicon-host/blob/master/matt-dizzle-dev.JPG?raw=true' className='contact-pic' alt='matt dizzle dev' />
            <a href="tel:+9095479183" id='phone-link'>Call Me: (909)547-9183</a>
            </div>

           <ContactForm />
        </section>
    )
}
