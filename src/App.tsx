import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PaintingsPage from './pages/PaintingsPage';
import Navbar from './components/Navbar';
import PhotographyPage from './pages/PhotographyPage';
import ArchitecturePage from './pages/ArchitecturePage';
import VideographyPage from './pages/VideographyPage';
import ContactPage from './pages/ContactPage';
import BaseContainerLayout from './components/BaseContainerLayout';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <Router basename='/art-portfolio'>
      <BaseContainerLayout>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/painting' element={<PaintingsPage />} />
          <Route path='/photography' element={<PhotographyPage />} />
          <Route path='/architecture' element={<ArchitecturePage />} />
          <Route path='/videography' element={<VideographyPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </BaseContainerLayout>
    </Router>
  );
};

export default App;
