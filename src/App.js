import './style/app.css'
import './style/navigation.css';
import './style/about.css'
import './components/navigation'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './pages';
import "./fonts/Montserrat-Italic-VariableFont_wght.ttf"
import "./fonts/Montserrat-VariableFont_wght.ttf"


function App() {
  return (
  <Router>
  <Routes>
      <Route exact path='/' element={<Home />} />
  </Routes>
  </Router>
);
}

export default App;
