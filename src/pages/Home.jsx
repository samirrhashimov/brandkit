import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconGrid from '../components/IconGrid';
import SearchBar from '../components/SearchBar';
import { iconsData } from '../data/icons';
import brandkitLogo from '../assets/brandkit.png';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');

  const exampleIcons = iconsData.slice(0, 6);

  const filteredIcons = searchQuery
    ? iconsData.filter((icon) =>
        icon.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : exampleIcons;

  const handleGetEmbedCode = () => {
    navigate('/gallery');
  };

  const handleUseNpm = () => {
    navigate('/gallery');
  };

  const handleIconSelect = (icon) => {
    navigate('/gallery');
  };

  return (
    <div className="home">
      <header className="home__header">
        <img src={brandkitLogo} alt="Brandkit" className="home__logo" />
      </header>

      <main className="home__main">
        <section className="home__hero">
          <h2 className="home__slogan">A modern way to use brand icons.</h2>
          <p className="home__description">
            Easily find and use popular brand icons for your projects.
            Get embed codes or use them through our npm package.
          </p>
        </section>

        <section className="home__search">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search for brand icons..."
          />
        </section>

        <section className="home__examples">
          <h3 className="home__examples-title">
            {searchQuery ? 'Search Results' : 'Popular Icons'}
          </h3>
          <IconGrid
            icons={filteredIcons}
            selectedIcons={[]}
            onIconSelect={handleIconSelect}
            enableLazyLoad={false}
          />
        </section>

        <section className="home__cta">
          <button
            className="home__cta-btn home__cta-btn--primary"
            onClick={handleGetEmbedCode}
          >
            Get Embed Code
          </button>
          <button
            className="home__cta-btn home__cta-btn--secondary"
            onClick={handleUseNpm}
          >
            Use via NPM
          </button>
        </section>
      </main>

      <footer className="home__footer">
        <p className="home__footer-text">
          © Brandkit 2025 – Open Icon Infrastructure
        </p>
      </footer>
    </div>
  );
};

export default Home;

