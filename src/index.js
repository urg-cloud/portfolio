import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home/Home';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import About from './pages/About';
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './pages/Navbar';
import Sidebar from './pages/Sidebar';
import { Link } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<App></App>
{/* <Navbar></Navbar>
  <BrowserRouter>
  <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/" element={<Navbar />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    
  </Routes>
</BrowserRouter> */}
</>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

