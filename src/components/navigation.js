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
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior:'smooth'
        })
    }
    const shrinkNav = (ref) => {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            ref.current.style.height = "100px";
            ref.current.style.flexDirection = 'row'
          } else {
            ref.current.style.height = "200px";
            ref.current.style.flexDirection = 'column'
          }
    }

    window.onscroll = function() {shrinkNav(navItems)};
    
    return (
        <div id='nav-main-container'>
            <div id='nav-content-container'>
                <div id='profile-container' className='nav-container'>
                    <div>image container</div>
                    <div id='name-container'>
                        <div class='letter-container'>
                        <span class='nav-letter'>C</span>
                        <span class='nav-letter'>o</span>
                        <span class='nav-letter'>l</span>
                        <span class='nav-letter'>e</span>
                    </div>
                    <div class='letter-container'>
                        <span class='nav-letter'>G</span>
                        <span class='nav-letter'>i</span>
                        <span class='nav-letter'>b</span>
                        <span class='nav-letter'>s</span>
                        <span class='nav-letter'>o</span>
                        <span class='nav-letter'>n</span>
                    </div>
                    </div>

                </div>
                <div id='nav-items-container' className='nav-container' ref={navItems}>
                    <div class='nav-item' onClick={() => scrollDown(aboutSection)} >About Me </div>
                    <div class='nav-item' onClick={() => scrollDown(projectsSection)}>Projects</div>
                    <div class='nav-item' onClick={() => scrollDown(contactSection)}>Contact</div>
                </div>
            </div>
            
            <Particles id='particles' init={particlesInit} options={{
                 
                 "fullScreen": {
                    "enable": false,
                    "zIndex": -1
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
                "retina_detect": true,
                "background": {
                    "color": "#B0C4DE",
                    "image": "",
                    "position": "50% 50%",
                    "repeat": "no-repeat",
                    "size": "cover"
                },
                'polygon': {
                    'draw': {
                      'enable': true,
                      'lineColor': "#f0f8ff",
                      'lineWidth': 0.7
                    },
                    'move': {
                      'radius': 8
                    },
                   
                    'inline': {
                    'arrangement': "equidistant",
                    },
                    'scale': 0.5,
                    'type': "inline",
                    'url': "https://particles.js.org/images/smalldeer.svg"
                  },
            }}
            />
        </div>
    )
}

export default Navigation