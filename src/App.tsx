// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> {/* Home page */}
        <Route path='/gallery' element={<Gallery />} /> {/* Gallery page */}
      </Routes>
    </Router>
  );
};

export default App;
