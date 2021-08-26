import React, { PureComponent } from 'react'
import Card from './Card'

export default function Contact(props) {
    return (
        <main className='contact-form'>
            <h2> Contact Me</h2>
            <form>
                <label>Name</label>
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
        </main>
    )
}
