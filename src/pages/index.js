import React from 'react'
import About from '../components/about'
import Footer from '../components/footer'
import Projects from '../components/projects'
import Navigation from '../components/navigation'


function Home () {
    return (
        <div className="App">
          <header className="App-header">
          </header>
          <Navigation/>
          <body>
          <About/>
          <Projects/>
          </body>
          <Footer/>
        </div>
      );
}

export default Home