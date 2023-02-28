import {Link} from "react-router-dom"
import '../style/projects.css'
import { Memorycardpic } from "../images"
const Projects = ({projectsSection}) => {

    //memory card - https://github.com/coleggibson/memorycard
    //calculator - https://github.com/coleggibson/calculon
    //todo list - https://github.com/coleggibson/to-do-list
    

    return (
        <div ref={projectsSection} className='section-header'>
            <div id='projects-title' >Projects</div>
            <div id='projects-container'>
                {/* <div id='slideshow-container'></div> */}
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