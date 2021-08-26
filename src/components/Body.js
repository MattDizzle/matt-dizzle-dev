import React from 'react'
import Card from './Card'

export default () => {
    return (
        <main>
            <Card title='about me' paragraph='lorem ipsum and thangs for now just rambling' />
            <Card rev = 'reverse' title='skills' paragraph='lorem ipsum and thangs for now just rambling' />
            <Card title='passions' paragraph='lorem ipsum and thangs for now just rambling' />
            <Card rev = 'reverse' title='how I learned stuff' paragraph='lorem ipsum and thangs for now just rambling' />
        </main>
        
    )
}
