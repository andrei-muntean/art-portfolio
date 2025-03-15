import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PaintingsPage from './pages/PaintingsPage';
import Navbar from './components/Navbar';
import PhotographyPage from './pages/PhotographyPage';
import ArhitecturePage from './pages/ArhitecturePage';
import VideographyPage from './pages/VideographyPage';
import ContactPage from './pages/ContactPage';
import BaseContainerLayout from './components/BaseContainerLayout';

const App = () => {
  return (
    <Router basename='/art-portfolio'>
      <BaseContainerLayout>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/painting' element={<PaintingsPage />} />
          <Route path='/photography' element={<PhotographyPage />} />
          <Route path='/arhitecture' element={<ArhitecturePage />} />
          <Route path='/videography' element={<VideographyPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </BaseContainerLayout>
    </Router>
  );
};

export default App;
