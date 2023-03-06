import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'
import '../style/navigation.css'
import {tsParticles} from "tsparticles-engine"
import {loadPolygonMaskPlugin} from "tsparticles-plugin-polygon-mask"






const Navigation = ({aboutSection, projectsSection, contactSection, navItems}) => {
    
    loadPolygonMaskPlugin(tsParticles)
    const particlesInit = async (main) => {
        console.log(main)
        await loadFull(main)
    }
    const scrollDown = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
   
    return (
        <div id='nav-main-container'>
            <div id='nav-content-container' className='nav-container'>
                <div id='name-container'>
                    <div className='intro'>Hello, I'm</div>
                    <div id='main-letter-container'>
                        <div className='letter-container'>
                            <span className='nav-letter'>C</span>
                            <span className='nav-letter'>o</span>
                            <span className='nav-letter'>l</span>
                            <span className='nav-letter'>e&nbsp;</span>
                        </div>
                        <div className='letter-container-last'>
                            <span className='nav-letter'>G</span>
                            <span className='nav-letter'>i</span>
                            <span className='nav-letter'>b</span>
                            <span className='nav-letter'>s</span>
                            <span className='nav-letter'>o</span>
                            <span className='nav-letter'>n</span>
                        </div>
                    </div>
                    <div class='intro'>Web Developer</div>
                </div>
            </div>
            <div id='nav-items-container' className='nav-container' ref={navItems}>
                <div className='nav-item' onClick={() => scrollDown(aboutSection)} >About Me </div>
                <div className='nav-item' onClick={() => scrollDown(projectsSection)}>Projects</div>
                <div className='nav-item' onClick={() => scrollDown(contactSection)}>Contact</div>
            </div>
            
            <Particles id='particles' init={particlesInit} options={{
                 
                 "fullScreen": {
                    "enable": false,
                    "zIndex": -1
                },
                "particles": {
                    "number": {
                        "value": 100,
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
                "retina_detect": true,
                "background": {
                    "color": "#0A1828",
                    "image": "",
                    "position": "50% 50%",
                    "repeat": "no-repeat",
                    "size": "cover"
                },
             }}
            />
        </div>
    )
}

export default Navigation