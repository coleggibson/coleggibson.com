import React from 'react'
import { headshot } from '../images'
import '../style/about.css'

const About = ({aboutSection, contactSection}) => {
    
    const scrollDown = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }

    return (
        <div id='about-section' className='before-scroll' ref={aboutSection}>
            <div id='about-title' className='section-header'>About Me</div>
            
            <div id='about-content-container'>
            <img id='headshot' src={headshot}/>
            <div id='right-side-content'>
                <p id='about-content'>
                    Front-End Developer based out of Nashville, TN with a lifelong passion for technology. Lifelong student with a growing library of development tools including React, JS, HTML5, and CSS. Background in project management and able to work out a solution to any complex problem. When I'm not coding you can find me at the local arcade or at nearest festival with Tame Impala.
                </p>
            <button id='contact-button' onClick={() => scrollDown(contactSection)}>Let's build something together!</button>
            </div>
            </div>
        </div>
    )
}

export default About