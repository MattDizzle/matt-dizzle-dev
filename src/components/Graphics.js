import React from 'react'
import Gallery from './Gallery'
import  one  from "../images/2.jpg"
import  six  from "../images/6.jpg"
import  seven  from "../images/7.jpg"
import  eight  from "../images/8.jpg"
import  nine  from "../images/9.jpg"
import  ten  from "../images/10.jpg"
import  eleven  from "../images/11.jpg"
import  twelve  from "../images/12.jpg"
import  thirteen  from "../images/13.jpg"
import  fourteen  from "../images/19.jpg"
import  fifteen  from "../images/20.jpg"
import  sixteen  from "../images/16.jpg"
import  seventeen  from "../images/17.jpg"
import  eighteen  from "../images/18.jpg"
import  nineteen  from "../images/25.jpg"

const Graphics = function Graphics() {
    const picsArray = [one, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen]

    return (
        <div className='graphics-box'>
            <Gallery images={picsArray}/>
        </div>
    )
}

export default Graphics