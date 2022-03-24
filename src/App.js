import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Faq from './pages/faq';
import Home from './pages';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='faq' element={<Faq/>}/>
      </Routes>
    </Router>
    <Router>
      <Footer />
    </Router>
    </>
  );
}

export default App;
