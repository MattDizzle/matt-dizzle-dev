import React from 'react'

export default function Contact() {
    return (
        <section className='contact-form'>
            <img src= 'https://source.unsplash.com/random' className='contact-pic' alt='matt dizzle dev' />
            <div className='contact-text-box'>
            <h2> Contact Me</h2>
            <form>
                <label >Name</label>
                <input></input>
                <label>Email</label>
                <input></input>
                <label>Phone</label>
                <input></input>
                <label>Website</label>
                <input></input>
                <label>Message</label>
                <textarea></textarea>
            </form>
            </div>
        </section>
    )
}
