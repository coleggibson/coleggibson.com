import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'

const Navigation = () => {

    const particlesInit = async (main) => {
        console.log(main)
        await loadFull(main)
    }
    
    return (
        <div id='nav-main-container'>
            <div id='nav-content-container'>
                <div id='profile-container' className='nav-container'>
                    <div>image container</div>
                    <h3 id='name'>Cole Gibson</h3>
                </div>
                <div id='nav-items-container' className='nav-container'>
                    <div className='nav-item'>About Me</div>
                    <div className='nav-item'>Projects</div>
                    <div className='nav-item'>Contact</div>
                </div>
            </div>
            <Particles id='particles' init={particlesInit} options={{
                 
                 "fullScreen": {
                    "enable": false,
                    "zIndex": -1
                },
                "particles": {
                    "number": {
                        "value": 50,
                        "density": {
                            "enable": false,
                            "value_area": 300
                        }
                    },
                    "color": {
                        "value": "random"
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
                        "value": 2.5,
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
                        "random": true,
                        "direction": "clockwise",
                        "animation": {
                            "enable": true,
                            "speed": 5,
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
                        "speed": 1,
                        "direction": "none",
                        "random": false,
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
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "attract"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "bubble"
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
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 50
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                "background": {
                    "color": "#B0C4DE",
                    "image": "",
                    "position": "50% 50%",
                    "repeat": "no-repeat",
                    "size": "cover"
                }
            }}
            />
        </div>
    )
}

export default Navigation