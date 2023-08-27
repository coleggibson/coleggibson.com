import '../style/projects.css'
import { LIClone, Memorycardpic, Portfolio, recipePage } from "../images"


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
                    <div className='project-left-side-content'>
                        <div className="project-item-title">API Recipe Search</div>
                        <div className='project-item-description'>A React application that uses Spoonacular.com API to search recipes by available ingredients. When you enter in your ingredients my app strings them together and injects them into the API url to search for recipes. Then for each recipe a follow up API function runs that finds the specific recipe information to include in the search results, including recipe image, name, and URL. I am currently working on adding more functionality included with the API as well as a Node JS backend to handle requests faster.</div>
                        <div className='project-item-tools'>
                            <div className='project-item-tools-item'>React JS</div>
                            <div className='project-item-tools-item'>RESTful API</div>
                            <div className='project-item-tools-item'>CSS</div>
                            <div className='project-item-tools-item'>Jekyll</div>
                        </div>
                    </div>
                    <div className='project-right-side-content'>    
                        <img className='project-image' src={recipePage} alt='recipe-screenshot'/>
                        <div className='project-buttons'>
                            <a href="https://github.com/coleggibson/recipeme" target="_blank">
                                <button className='button'>View Code</button>
                            </a>
                            <a href="https://coleggibson.github.io/recipeme" target="_blank">
                                <button className='button'>Live Demo</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='project-item'> 
                <div className='project-left-side-content'>
                    <div className="project-item-title">LinkedIn Front Page</div>
                    <div className='project-item-description'>This is a recreation of the website we all know and love (sometimes), LinkedIn. It was created with React JS, Jekyll, and hosted on GitHub Pages. Created the baseline for each component first then used display grid to align them all correctly overall then display flex on each individual box. Also recreated the top left search function that grays out the page on click.</div>
                    <div className='project-item-tools'>
                            <div className='project-item-tools-item'>React JS</div>
                            <div className='project-item-tools-item'>Jekyll</div>
                            <div className='project-item-tools-item'>CSS</div>
                    </div>
                </div>
                <div className='project-right-side-content'>    
                    <img className='project-image' src={LIClone} alt='LI-screenshot'/>
                    <div className='project-buttons'>
                        <a href="https://github.com/coleggibson/li-remade" target="_blank">
                            <button className='button'>View Code</button>                       
                        </a>
                        <a href="https://coleggibson.github.io/li-remade/" target="_blank">
                            <button className='button'>Live Demo</button>
                        </a>
                    </div>
                </div>
                </div>
                <div className='project-item'>
                    <div className='project-left-side-content'> 
                        <div className="project-item-title">Console Memory Game</div>
                        <div className='project-item-description'>A memory game with a simple goal, don't pick the same card twice! Created with React JS, Jekyll and hosted on GitHub Pages. To start this project I searched through shutterstock for high quality free images of consoles to use, then created an array to store the images. For the final result I mapped through the array to display and created a randomizing algorithm to change the order on click.</div>
                        <div className='project-item-tools'>
                            <div className='project-item-tools-item'>React JS</div>
                            <div className='project-item-tools-item'>Jekyll</div>
                            <div className='project-item-tools-item'>CSS</div>
                        </div>
                    </div>
                    <div className='project-right-side-content'>    
                        <img className='project-image' src={Memorycardpic} alt='memorycard-screenshot'/>
                        <div className='project-buttons'>
                            <a href="https://github.com/coleggibson/memorycard/" target="_blank">
                                <button className='button'>View Code</button>
                            </a>
                            <a href="https://coleggibson.github.io/memorycard/" target="_blank">
                                <button className='button'>Live Demo</button>
                            </a>
                    </div>
                </div>
                </div>
                <div className='project-item'> 
                    <div className='project-left-side-content'>
                        <div className="project-item-title">Porfolio Website</div>
                        <div className='project-item-description'>I built and designed this website with love. Created with React JS, Jekyll and hosted on GitHub pages. The floating particles are TS Particles. Website is mobile friendly.</div>
                        <div className='project-item-tools'>
                            <div className='project-item-tools-item'>React JS</div>
                            <div className='project-item-tools-item'>Jekyll</div>
                            <div className='project-item-tools-item'>tsParticles</div>
                            <div className='project-item-tools-item'>CSS</div>
                        </div>
                    </div>
                    <div className='project-right-side-content'>    
                        <img className='project-image' src={Portfolio} alt='portfolio-screenshot'/>
                        <div className='project-buttons'>
                            <a href="https://github.com/coleggibson/coleggibson.github.io" target="_blank">
                                <button className='button'>View Code</button>
                            </a>
                            <button className='button' onClick={() => topFunction()}>Live Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects