import React from 'react'
import About from '../components/about'
import Footer from '../components/footer'
import Projects from '../components/projects'
import Navigation from '../components/navigation'
import Contact from '../components/contact'
import {useRef} from 'react'
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'



function Home () {
  const aboutSection = useRef();
  const projectsSection = useRef();
  const contactSection = useRef();
  const navItems = useRef();

  const shrinkNav = (ref) => {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      ref.current.style.flexDirection = 'row'
      } else if(document.body.scrollTop < 400 || document.documentElement.scrollTop < 400) {
        ref.current.style.height = "200px";
        ref.current.style.flexDirection = 'column'
      } else if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        ref.current.style.display = 'none'
      } else {
        console.log("im working")
      }
}

const fadeRight = (ref) => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      ref.current.classList.remove ("after-scroll")
      ref.current.classList.add("after-scroll")
    } else {
      ref.current.classList.remove("after-scroll")
      ref.current.classList.add("before-scroll")
    }
}

const fadeRightProj = (ref) => {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      ref.current.classList.remove ("after-scroll")
      ref.current.classList.add("after-scroll")
    } else {
      ref.current.classList.remove("after-scroll")
      ref.current.classList.add("before-scroll")
    }
}


window.onscroll = function () {fadeRight(aboutSection); fadeRightProj(projectsSection)}

const particlesInit = async (main) => {
  await loadFull(main)
}

const options =

{
                 
  "fullScreen": {
     "enable": false,
     "zIndex": 1
 },
 "particles": {
     "number": {
         "value": 200,
         "density": {
             "enable": false,
             "value_area": 300
         }
     },
     "color": {
         "value": "#ffffff"
     },
     "shape": {
         "type": "circle",
         "options": {
             "sides": 2
         }
     },
     "opacity": {
         "value": 0.8,
         "random": false,
         "anim": {
             "enable": false,
             "speed": 1,
             "opacity_min": 0.1,
             "sync": false
         }
     },
     "size": {
         "value": 2,
         "random": false,
         "anim": {
             "enable": false,
             "speed": 10,
             "size_min": 0.1,
             "sync": false
         }
     },
     "rotate": {
         "value": 0,
         "random": false,
         "direction": "clockwise",
         "animation": {
             "enable": true,
             "speed": 3,
             "sync": false
         }
     },
     "line_linked": {
         "enable": false,
         "distance": 600,
         "color": "#ffffff",
         "opacity": 0.4,
         "width": 2
     },
     "move": {
         "enable": true,
         "speed": .2,
         "direction": "none",
         "random": true,
         "straight": false,
         "out_mode": "bounce",
         "attract": {
             "enable": false,
             "rotateX": 600,
             "rotateY": 1200
         }
     }
     
 },
 
 "interactivity": {
     'detectsOn': 'canvas',
     "events": {
         "onhover": {
             "enable": true,
             "mode": "bubble"
         },
         "onclick": {
             "enable": true,
             "mode": "connect"
         },
         "resize": true
     },
     "modes": {
         "grab": {
             "distance": 200,
             "line_linked": {
                 "opacity": 1
             }
         },
         "bubble": {
             "distance": 50,
             "size": 4,
             "duration": 2,
             "opacity": 8,
             "speed": 10
         },
         "repulse": {
             "distance": 50
         },
         "push": {
             "particles_nb": 4
         },
         "remove": {
             "particles_nb": 2
         },
         "trail": {
             "delay": 0.005,
             "quantity": 1,
             "pauseOnStop": false
         },
         
     }
 },
 "retina_detect": false,
 "background": {
     "color": "#0A1828",
     "image": "",
     "position": "50% 50%",
     "repeat": "no-repeat",
     "size": "cover"
 },
}


    return (
        <div className="App">
          <Navigation aboutSection = {aboutSection}
          projectsSection = {projectsSection} contactSection={contactSection}
          navItems = {navItems} shrinkNav = {shrinkNav}/>
          <div id='main-body'>
          <Particles id='body-particles' init={particlesInit} options={options}/>
          <About aboutSection = {aboutSection} contactSection={contactSection}/>
          <Projects projectsSection = {projectsSection}/>
          <Contact contactSection={contactSection}/>
          </div>
          {/* <Footer/> */}
        </div>
      );
}

export default Home