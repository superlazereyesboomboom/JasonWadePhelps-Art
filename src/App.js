import './App.css';
import { BrowserRouter as Router, Route, Routes, Link,Navigate } from 'react-router-dom';
import Portfolio from './components/pages/portfolio';
import Bio from './components/pages/Bio';
import Contact from './components/pages/contact'
import Cv from './components/pages/cv'
import Home from './components/pages/home'
import Art from './components/pages/art'
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Home />} />
        <Route path="/about" element={<Bio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/portfolio/:artId" element={<Art />} />

      </Routes>
    </Router>
  );
}

export default App;


