import React from 'react'
import '../style/about.css'

const About = ({aboutSection}) => {
    
    const fadeRight = (ref) => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            ref.current.classList.remove ("after-scroll")
            ref.current.classList.add("after-scroll")
          } else {
            ref.current.classList.remove("after-scroll")
            ref.current.classList.add("before-scroll")
          }
    }

    window.onscroll = function () {fadeRight(aboutSection)}

    return (
        <div id='about-section' className='before-scroll' ref={aboutSection}>
            <div className='section-header'>About</div>
            <div id='about-content-container'>
                <p id='about-content'>
                    I am a Front-End Developer based out of Nashville, TN. With a passion for detail and design I am always looking for new projects to apply my skills. In my free time you can find me mixing music or playing Galaga at the local arcade. 
                </p>
            </div>
        </div>
    )
}

export default About