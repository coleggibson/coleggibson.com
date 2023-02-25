import './style/app.css'
import './style/navigation.css';
import './style/about.css'
import './components/navigation'
import Navigation from './components/navigation';
import About from './components/about'
import Footer from './components/footer'
import Projects from './components/projects'
import memorycard from './Memorycard'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
      <Navigation/>
      <About/>
      <Projects/>
      </body>
      <Footer/>
    </div>
  );
}

export default App;
