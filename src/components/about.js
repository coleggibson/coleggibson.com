import React from 'react'
import '../style/about.css'

const About = ({aboutSection}) => {
    
    return (
        <div id='about-section' className='before-scroll' ref={aboutSection}>
            <div id='about-title' className='section-header'>About</div>
            <div id='about-content-container'>
                <p id='about-content'>
                    Front-End Developer based out of Nashville, TN with a lifelong passion for technology. A master in Google-Fu, always able go out and hunt down a solution. When I'm not coding you can find me at the local arcade playing Galaga or at a concert, most likely not a Country artist contrary to my location. Let's build something together!
                </p>
            </div>
        </div>
    )
}

export default About