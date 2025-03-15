import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Paintings from './pages/Paintings';
import Navbar from './components/Navbar';
import Photography from './pages/Photography';
import Arhitecture from './pages/Arhitecture';
import Videography from './pages/Videography';
import Contact from './pages/Contact';
import BaseContainer from './components/BaseContainer';

const App = () => {
  return (
    <Router basename='/art-portfolio'>
      <BaseContainer>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/painting' element={<Paintings />} />
          <Route path='/photography' element={<Photography />} />
          <Route path='/arhitecture' element={<Arhitecture />} />
          <Route path='/videography' element={<Videography />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BaseContainer>
    </Router>
  );
};

export default App;
