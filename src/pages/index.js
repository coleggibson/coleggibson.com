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
  const navItems = useRef();

  const shrinkNav = (ref) => {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      ref.current.style.flexDirection = 'row'
      } else {
        ref.current.style.height = "200px";
        ref.current.style.flexDirection = 'column'
      }
}

const fadeRight = (ref) => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      ref.current.classList.remove ("after-scroll")
      ref.current.classList.add("after-scroll")
    } else {
      ref.current.classList.remove("after-scroll")
      ref.current.classList.add("before-scroll")
    }
}

const fadeRightProj = (ref) => {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      ref.current.classList.remove ("after-scroll")
      ref.current.classList.add("after-scroll")
    } else {
      ref.current.classList.remove("after-scroll")
      ref.current.classList.add("before-scroll")
    }
}


window.onscroll = function () {fadeRight(aboutSection); shrinkNav(navItems); fadeRightProj(projectsSection)}

    return (
        <div className="App">
          <header className="App-header">
          </header>
          <Navigation aboutSection = {aboutSection}
          projectsSection = {projectsSection} contactSection={contactSection}
          navItems = {navItems} shrinkNav = {shrinkNav}/>
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