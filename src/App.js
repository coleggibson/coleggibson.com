import './style/app.css'
import './style/navigation.css';
import './style/about.css'
import './components/navigation'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './pages';



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
