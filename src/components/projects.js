import {Link} from "react-router-dom"
import '../style/projects.css'
import { Memorycardpic } from "../images"
const Projects = ({projectsSection}) => {

    //memory card - https://github.com/coleggibson/memorycard
    //calculator - https://github.com/coleggibson/calculon
    //todo list - https://github.com/coleggibson/to-do-list
    

    return (
        <div id='projects-section' ref={projectsSection} className='before-scroll'>
            <div id='projects-title' className='section-header' >Projects</div>
            <div id='projects-container'>
                {/* <div id='slideshow-container'></div> */}
                <div id='memory-card-content'> 
                    <img src={Memorycardpic} alt='memorycard-screenshot'/>
                    <div class='project-buttons'>
                    <a href="https://github.com/coleggibson/memorycard/" target="_blank">
                    <button class='button'>View Code</button>
                    </a>
                    <a href="https://coleggibson.github.io/memorycard/" target="_blank">
                    <button class='button'>View Demo</button>
                    </a>
                    </div>
                </div>
                <div class='memory-card-content'> 
                    <img src={Memorycardpic} alt='memorycard-screenshot'/>
                    <div class='project-buttons'>
                    <a href="https://github.com/coleggibson/coleggibson.github.io" target="_blank">
                    <button class='button'>View Demo</button>
                    </a>
                    <Link to="memorycard">
                        <button class='button'>View Demo</button>
                    </Link>
                    </div>
                </div>
                <div class='memory-card-content'> 
                    <img src={Memorycardpic} alt='memorycard-screenshot'/>
                    <div class='project-buttons'>
                        <button class='button'>View Code</button>
                    <Link to="memorycard">
                        <button class='button'>View Demo</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects