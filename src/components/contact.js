import {
    GitHub,
    Gmail,
    LinkedIn
} from '../images'
import '../style/contact.css'
const Contact= ({contactSection}) => {
    return (
        <div id='contact-section' ref={contactSection}>
            <div className='section-header'>Contact</div>
            <div id='contact-container'>
            <div className='contact-item'>
            <div>coleggibson@gmail.com</div>
            <img id='gmail' src={Gmail} className='contact-img' alt='gmail'/>
            </div>
            <div className='contact-item'>
            <div>github</div>
            <img src={GitHub} className='contact-img' alt='github'/>
            </div>
            <div className='contact-item'>
            <div>linkedin</div>
            <img src={LinkedIn} className='contact-img' alt='linkedin'/>
            </div>
            {/* <div className='contact-item'>
            <div>resume</div>
            <div>image</div>
            </div> */}
            </div>
        </div>
    )
}

export default Contact