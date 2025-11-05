import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconGrid from '../components/IconGrid';
import SearchBar from '../components/SearchBar';
import SelectedIconsPanel from '../components/SelectedIconsPanel';
import { iconsData, searchIcons } from '../data/icons';
import brandkitLogo from '../assets/brandkit.png';
import '../styles/IconGallery.css';

const IconGallery = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedIcons, setSelectedIcons] = React.useState([]);

  const filteredIcons = searchQuery ? searchIcons(searchQuery) : iconsData;

  const handleIconSelect = (icon) => {
    setSelectedIcons((prev) => {
      const isSelected = prev.some((item) => item.id === icon.id);
      if (isSelected) {
        return prev.filter((item) => item.id !== icon.id);
      }
      return [...prev, icon];
    });
  };

  const handleClearSelection = () => {
    setSelectedIcons([]);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleViewEmbed = () => {
    navigate('/embed', { state: { selectedIcons } });
  };

  return (
    <div className="gallery">
      <header className="gallery__header">
        <img 
          src={brandkitLogo} 
          alt="Brandkit" 
          className="gallery__logo" 
          onClick={handleLogoClick}
        />
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search icons..."
        />
      </header>

      <main className="gallery__main">
        <div className="gallery__grid-section">
          <div className="gallery__grid-header">
            <h2 className="gallery__title">All Icons ({filteredIcons.length})</h2>
            {selectedIcons.length > 0 && (
              <button
                className="gallery__view-embed-btn"
                onClick={handleViewEmbed}
              >
                View Embed Preview
              </button>
            )}
          </div>
          <IconGrid
            icons={filteredIcons}
            selectedIcons={selectedIcons}
            onIconSelect={handleIconSelect}
            enableLazyLoad={true}
          />
        </div>

        <aside className="gallery__sidebar">
          <SelectedIconsPanel
            selectedIcons={selectedIcons}
            onClear={handleClearSelection}
          />
        </aside>
      </main>

      <footer className="gallery__footer">
        <p className="gallery__footer-text">
          © Brandkit 2025 – Open Icon Infrastructure
        </p>
      </footer>
    </div>
  );
};

export default IconGallery;

