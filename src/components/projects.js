import {Link} from "react-router-dom"

const Projects = () => {

    //memory card - https://github.com/coleggibson/memorycard
    //calculator - https://github.com/coleggibson/calculon
    //todo list - https://github.com/coleggibson/to-do-list
    

    return (
        <div>
           Projects
           <div id='slideshow-container'>
            
           </div>
           <Link to="memorycard">
            <button>Click Me</button>
           </Link>
        </div>
    )
}

export default Projects