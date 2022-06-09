import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import WorkShow from './WorkShow';
import NavBar from './NavBar';

function App() {
  return (
    <HashRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<WorkShow />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
