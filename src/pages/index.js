import React from 'react'
import About from '../components/about'
import Footer from '../components/footer'
import Projects from '../components/projects'
import Navigation from '../components/navigation'
import Contact from '../components/contact'
import {useRef} from 'react'


function Home () {
  const aboutSection = useRef();
  const projectsSection = useRef();
  const contactSection = useRef();

    return (
        <div className="App">
          <header className="App-header">
          </header>
          <Navigation aboutSection = {aboutSection}
          projectsSection = {projectsSection} contactSection={contactSection}/>
          <body>
          <About aboutSection = {aboutSection}/>
          <Projects projectsSection = {projectsSection}/>
          <Contact contactSection={contactSection}/>
          </body>
          <Footer/>
        </div>
      );
}

export default Home