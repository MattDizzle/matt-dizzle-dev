import React from 'react'
import ContactForm from './ContactForm'

export default function Contact() {
    return (
        <section className='contact-form-page' id='contact'>
            <img src= 'https://github.com/MattDizzle/favicon-host/blob/master/matt-dizzle-dev.JPG?raw=true' className='contact-pic' alt='matt dizzle dev' />
           <ContactForm />
        </section>
    )
}
