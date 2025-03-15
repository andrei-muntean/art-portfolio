import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import React from 'react';
import Home from './pages/Home';
import Gallery from './pages/Gallery';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
