import '../style/projects.css'
import { LIClone, Memorycardpic, Portfolio } from "../images"


const Projects = ({projectsSection, topFunction}) => {   
    
    function topFunction() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }

    return (
        <div id='projects-section' ref={projectsSection} className='before-scroll'>
            <div id='projects-title' className='section-header'>Projects</div>
            <div id='projects-container'>
                {/* <div id='slideshow-container'></div> */}
                <div className='project-item'> 
                <div className="project-item-title">API Recipe Search (Currently Building)</div>
                <div className='project-item-description'>Using <a href='spoonacular.com'>Spoonacular.com API</a></div>
                    <img className='project-image' src={LIClone} alt='memorycard-screenshot'/>
                    <div class='project-buttons'>
                        <button class='button'>View Code</button>
                        <a href="https://github.com/coleggibson/li-remade" target="_blank">
                        </a>
                        <a href="https://coleggibson.github.io/li-remade/" target="_blank">
                        <button class='button'>Live Demo</button>
                    </a>
                    </div>
                </div>
                <div className='project-item'> 
                <div className="project-item-title">LinkedIn Front Page</div>
                <div className='project-item-description'>This is a recreation of the website we all know and love (sometimes), LinkedIn. It was created with React JS, Jekyll, and hosted on GitHub Pages.  I have grown to be a fan of the grid layout and had the opportunity to be able to flex those skills on this project for the overall body layout. This page is also friendly and adjustable for devices on smaller screens. I also recreated the top left search function that grays out the page on click.</div>
                    <img className='project-image' src={LIClone} alt='memorycard-screenshot'/>
                    <div class='project-buttons'>
                        <button class='button'>View Code</button>
                        <a href="https://github.com/coleggibson/li-remade" target="_blank">
                        </a>
                        <a href="https://coleggibson.github.io/li-remade/" target="_blank">
                        <button class='button'>Live Demo</button>
                    </a>
                    </div>
                </div>
                <div className='project-item'> 
                    <div className="project-item-title">Console Memory Game</div>
                    <div className='project-item-description'>A memory game with a simple goal, don't pick the same card twice! Created with React JS, Jekyll and hosted on GitHub Pages. To start this project I searched through shutterstock for high quality free images of consoles to use, then created an array to store the images. For the final result I mapped through the array to display and created a randomizing algorithm to change the order on click.</div>
                    <img className='project-image' src={Memorycardpic} alt='memorycard-screenshot'/>
                    <div class='project-buttons'>
                    <a href="https://github.com/coleggibson/memorycard/" target="_blank">
                    <button class='button'>View Code</button>
                    </a>
                    <a href="https://coleggibson.github.io/memorycard/" target="_blank">
                    <button class='button'>Live Demo</button>
                    </a>
                    </div>
                </div>
                <div className='project-item'> 
                <div className="project-item-title">Porfolio Website</div>
                <div className='project-item-description'>I built and designed this website with love. Created with React JS, Jekyll and hosted on GitHub pages. The floating particles are TS Particles. Website is mobile friendly.</div>
                    <img className='project-image' src={Portfolio} alt='memorycard-screenshot'/>
                    <div class='project-buttons'>
                    <a href="https://github.com/coleggibson/coleggibson.github.io" target="_blank">
                    <button class='button'>Live Demo</button>
                    </a>
                    <button class='button' onClick={() => topFunction()}>View Demo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects