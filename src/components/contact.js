import {
    GitHub,
    Gmail,
    LinkedIn
} from '../images'
import '../style/contact.css'
import {Link} from "react-router-dom"

const Contact= ({contactSection}) => {
    return (
        <div id='contact-section' ref={contactSection}>
            <div id='contact-container'>
<<<<<<< HEAD
                <div className='contact-item'>
                    <div>coleggibson@gmail.com</div>
                    <img id='gmail' src={Gmail} className='contact-img' alt='gmail'/>
                </div>
                <div className='contact-container-bottom'>
                    <div className='contact-item'>
                        <a href="https://github.com/coleggibson" target="_blank">
                            <img src={GitHub} className='contact-img' alt='github'/>
                        </a>
                    </div>
                    <div className='contact-item'>
                        <a href="https://www.linkedin.com/in/colemanggibson/" target="_blank">
                            <img src={LinkedIn} className='contact-img' alt='linkedin'/>
                        </a>
                    </div>
                </div>
=======
            <div className='contact-item'>
            <div id='email-container'>coleggibson@gmail.com</div>
            <img id='gmail' src={Gmail} className='contact-img' alt='gmail'/>
            </div>
            <div className='contact-container-bottom'>
            <div className='contact-item'>
            <a href="https://github.com/coleggibson" target="_blank">
            <img src={GitHub} className='contact-img' alt='github'/>
            </a>
            </div>
            <div className='contact-item'>
            <a href="https://www.linkedin.com/in/colemanggibson/" target="_blank">
            <img src={LinkedIn} className='contact-img' alt='linkedin'/>
            </a>
            </div>
            </div>
            {/* <div className='contact-item'>
            <div>resume</div>
            <div>image</div>
            </div> */}
>>>>>>> c14a543 (Updated sizes)
            </div>
        </div>
    )
}

export default Contact