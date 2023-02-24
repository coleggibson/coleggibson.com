import './style/app.css'
import './components/navigation'
import Navigation from './components/navigation';
import About from './components/about'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
      <Navigation/>
      <About/>
      </body>
      <Footer/>
    </div>
  );
}

export default App;
