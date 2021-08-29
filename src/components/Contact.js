import React from 'react'
import ContactForm from './ContactForm'

export default function Contact() {
    return (
        <section className='contact-form' id='contact'>
            <img src= 'https://source.unsplash.com/collection/10649550' className='contact-pic' alt='matt dizzle dev' />
           <ContactForm />
        </section>
    )
}
