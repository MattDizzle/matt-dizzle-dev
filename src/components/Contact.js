import React from 'react'
import ContactForm from './ContactForm'

export default function Contact() {
    return (
        <section className='contact-form'>
            <img src= 'https://source.unsplash.com/random' className='contact-pic' alt='matt dizzle dev' />
           <ContactForm />
        </section>
    )
}
