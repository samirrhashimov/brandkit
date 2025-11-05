import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import brandkitLogo from '../assets/brandkit.png';
import '../styles/EmbedPreview.css';

const EmbedPreview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedIcons = location.state?.selectedIcons || [];
  const [copied, setCopied] = React.useState(false);

  const generateDirectUrl = () => {
    if (selectedIcons.length === 0) return '';
    const iconIds = selectedIcons.map((icon) => icon.id).join(',');
    const baseUrl = window.location.origin;
    return `${baseUrl}/icons/${iconIds}`;
  };

  const generateEmbedCode = () => {
    if (selectedIcons.length === 0) return '';
    const embedUrl = generateDirectUrl();
    
    return `<!-- Serverless Embed using iframe -->
<iframe 
  src="${embedUrl}" 
  width="200" 
  height="60" 
  frameborder="0"
  title="Brand Icons">
</iframe>

<!-- Direct link -->
<a href="${embedUrl}" target="_blank">View Icons</a>

<!-- Custom size: add ?size=64 -->
<iframe 
  src="${embedUrl}?size=64" 
  width="250" 
  height="80" 
  frameborder="0">
</iframe>

<!-- Example URL: ${embedUrl} -->`;
  };

  const handleCopy = async () => {
    const code = generateEmbedCode();
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleBackToGallery = () => {
    navigate('/gallery');
  };

  React.useEffect(() => {
    if (selectedIcons.length === 0) {
      navigate('/gallery');
    }
  }, [selectedIcons.length, navigate]);

  return (
    <div className="embed-preview">
      <header className="embed-preview__header">
        <img 
          src={brandkitLogo} 
          alt="Brandkit" 
          className="embed-preview__logo" 
          onClick={handleLogoClick}
        />
        <button
          className="embed-preview__back-btn"
          onClick={handleBackToGallery}
        >
          ← Back to Gallery
        </button>
      </header>

      <main className="embed-preview__main">
        <section className="embed-preview__section">
          <h2 className="embed-preview__title">📍 Serverless URL</h2>
          <p className="embed-preview__description">
            Use this direct URL to embed icons without hosting. Perfect for quick integration!
          </p>
          <div className="embed-preview__url-box">
            <code className="embed-preview__url">{generateDirectUrl()}</code>
          </div>
        </section>

        <section className="embed-preview__section">
          <h2 className="embed-preview__title">Embed Code</h2>
          <p className="embed-preview__description">
            Copy this HTML code to use the selected icons in your project.
          </p>
          
          <div className="embed-preview__code-container">
            <pre className="embed-preview__code">{generateEmbedCode()}</pre>
            <button
              className="embed-preview__copy-btn"
              onClick={handleCopy}
            >
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
        </section>

        <section className="embed-preview__section">
          <h2 className="embed-preview__title">Live Preview</h2>
          <p className="embed-preview__description">
            See how your icons will look when embedded.
          </p>
          
          <div className="embed-preview__live">
            {selectedIcons.map((icon) => (
              <div key={icon.id} className="embed-preview__icon">
                <div
                  className="embed-preview__icon-svg"
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                  style={{ color: icon.color }}
                />
                <span className="embed-preview__icon-name">{icon.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="embed-preview__footer">
        <p className="embed-preview__footer-text">
          © Brandkit 2025 – Open Icon Infrastructure
        </p>
      </footer>
    </div>
  );
};

export default EmbedPreview;

