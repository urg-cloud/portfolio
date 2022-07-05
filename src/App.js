
import './App.css';
import Home from './pages/Home/Home';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import About from './pages/About';
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './pages/Navbar';
import Navmenu from './pages/Navmenu';
import Project from './pages/Project';


function App() {
  return (
 <>
 {/* <Navbar></Navbar> */}
 <Navmenu></Navmenu>


  <BrowserRouter>
  <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/" element={<Navmenu />} />
    <Route path="about" element={<About />} />
    <Route path="skills" element={<Skills />} />
    <Route path="project" element={<Project />} />
    <Route path="contact" element={<Contact />} />
    
  </Routes>
</BrowserRouter>
 </>
 
   
  );
}

export default App;
