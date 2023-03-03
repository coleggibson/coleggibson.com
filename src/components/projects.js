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
                    <div className="project-item-title">Memory Card Game</div>
                    <img className='project-image' src={Memorycardpic} alt='memorycard-screenshot'/>
                    <div class='project-buttons'>
                    <a href="https://github.com/coleggibson/memorycard/" target="_blank">
                    <button class='button'>View Code</button>
                    </a>
                    <a href="https://coleggibson.github.io/memorycard/" target="_blank">
                    <button class='button'>View Demo</button>
                    </a>
                    </div>
                </div>
                <div className='project-item'> 
                <div className="project-item-title">Porfolio Website</div>
                    <img className='project-image' src={Portfolio} alt='memorycard-screenshot'/>
                    <div class='project-buttons'>
                    <a href="https://github.com/coleggibson/coleggibson.github.io" target="_blank">
                    <button class='button'>View Demo</button>
                    </a>
                    <button class='button' onClick={() => topFunction()}>View Demo</button>
                    </div>
                </div>
                <div className='project-item'> 
                <div className="project-item-title">LinkedIn Clone</div>
                    <img className='project-image' src={LIClone} alt='memorycard-screenshot'/>
                    <div class='project-buttons'>
                        <button class='button'>View Code</button>
                        <a href="https://github.com/coleggibson/li-remade" target="_blank">
                        </a>
                        <a href="https://coleggibson.github.io/li-remade/" target="_blank">
                        <button class='button'>View Demo</button>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects