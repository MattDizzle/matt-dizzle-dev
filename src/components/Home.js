import React from 'react'
import Card from './Card'

const Home = () => {
    return (
        <section>
            <Card source='https://source.unsplash.com/collection/10649550' title='about me' paragraph='lorem ipsum and thangs for now just rambling' id='about-me' />
            <Card source='https://source.unsplash.com/collection/1773435' rev = 'reverse' title='skills' paragraph='lorem ipsum and thangs for now just rambling' id='skills' />
            <Card source='https://source.unsplash.com/collection/8354564' title='passions' paragraph='lorem ipsum and thangs for now just rambling' id='passions' />
            <Card source='https://source.unsplash.com/collection/6221583' rev = 'reverse' title='how I learned stuff' paragraph='lorem ipsum and thangs for now just rambling' />
        </section>
        
    )
}

export default Home