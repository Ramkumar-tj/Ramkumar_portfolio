import React from 'react';
import '@fontsource/roboto';
import 'animate.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CursorEffect from './components/CursorEffect';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Freelance from './components/Freelance';
import Experience from './components/Experience';
import Resume from './components/Resume';

const App = () => (
  <Router>
    <CursorEffect/>
    <Header />
    <div className="main min-h-screen flex flex-col">
      <div className="lg:flex-grow h-full flex flex-col lg:flex-row">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/freelance" element={<Freelance />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
