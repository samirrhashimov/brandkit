import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import IconGallery from './pages/IconGallery';
import EmbedPreview from './pages/EmbedPreview';
import IconEmbed from './pages/IconEmbed';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<IconGallery />} />
          <Route path="/embed" element={<EmbedPreview />} />
          <Route path="/icons/:iconIds" element={<IconEmbed />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

