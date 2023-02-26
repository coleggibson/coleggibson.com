import React from 'react'
import '../style/about.css'
import Home from '../pages'

const About = ({aboutSection}) => {
    
    return (
        <div id='about-section' ref={aboutSection}>
            <div className='section-header'>About</div>
            <p id='about-content'>
                I am a Front-End Developer based out of Nashville, TN. With a passion for detail and design I am always looking for new projects to apply my skills. In my free time you can find me mixing music or playing Galaga at the local arcade. 
            </p>
        </div>
    )
}

export default About