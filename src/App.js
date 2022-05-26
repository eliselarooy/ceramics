import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import WorkShow from './components/WorkShow';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<WorkShow />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
