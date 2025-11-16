import React from 'react';
import '../styles/SelectedIconsPanel.css';

const SelectedIconsPanel = ({ selectedIcons, onClear }) => {
  const [copiedEmbed, setCopiedEmbed] = React.useState(false);
  const [copiedNpm, setCopiedNpm] = React.useState(false);
  const [copiedUrl, setCopiedUrl] = React.useState(false);

  const generateEmbedUrl = () => {
    if (selectedIcons.length === 0) return '';
    const iconIds = selectedIcons.map((icon) => icon.id).join(',');
    const baseUrl = window.location.origin;
    return `${baseUrl}/icons/${iconIds}`;
  };

  const generateEmbedCode = () => {
    if (selectedIcons.length === 0) return '';
    const embedUrl = generateEmbedUrl();
    
    return `<iframe src="${embedUrl}" width="200" height="60" frameborder="0" title="Brandkit"></iframe>
`;
  };

  const generateNpmCode = () => {
    if (selectedIcons.length === 0) return `// Install\nnpm install brandkitjs`;

    // Helper: convert id (e.g. "github") to PascalCase export name (e.g. "Github")
    const toPascal = (s) =>
      s
        .split(/[-_\s]/)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');

    const namedExports = selectedIcons.map((icon) => toPascal(icon.id)).join(', ');
    const firstId = selectedIcons[0]?.id || 'icon-id';

    return `npm install brandkitjs\n\nimport { ${namedExports} } from 'brandkitjs';\n\n${selectedIcons.map((icon) => `<${toPascal(icon.id)} size="24px" />`)
      .join('\n')}`;
  };

  const generateDirectUrl = () => {
    return generateEmbedUrl();
  };

  const handleCopyEmbed = async () => {
    const code = generateEmbedCode();
    try {
      await navigator.clipboard.writeText(code);
      setCopiedEmbed(true);
      setTimeout(() => setCopiedEmbed(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleCopyNpm = async () => {
    const code = generateNpmCode();
    try {
      await navigator.clipboard.writeText(code);
      setCopiedNpm(true);
      setTimeout(() => setCopiedNpm(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleCopyUrl = async () => {
    const url = generateDirectUrl();
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleOpenPreview = () => {
    const url = generateDirectUrl();
    window.open(url, '_blank');
  };

  return (
    <div className="selected-panel">
      <div className="selected-panel__header">
        <h2 className="selected-panel__title">
          Selected Icons ({selectedIcons.length})
        </h2>
        {selectedIcons.length > 0 && (
          <button
            className="selected-panel__clear"
            onClick={onClear}
            aria-label="Clear all selected icons"
          >
            Clear All
          </button>
        )}
      </div>

      {selectedIcons.length === 0 ? (
        <div className="selected-panel__empty">
          <p>No icons selected yet</p>
          <p className="selected-panel__hint">Click on icons to select them</p>
        </div>
      ) : (
        <>
          <div className="selected-panel__icons">
            {selectedIcons.map((icon) => (
              <div key={icon.id} className="selected-panel__icon">
                <div
                  className="selected-panel__icon-svg"
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                  style={{ color: icon.color }}
                />
                <span className="selected-panel__icon-name">{icon.name}</span>
              </div>
            ))}
          </div>

          <div className="selected-panel__section">
            <h3 className="selected-panel__subtitle">Direct URL</h3>
            <div className="selected-panel__url-box">
              <code className="selected-panel__url">{generateDirectUrl()}</code>
            </div>
            <div className="selected-panel__button-group">
              <button
                className="selected-panel__copy-btn selected-panel__copy-btn--primary"
                onClick={handleCopyUrl}
              >
                {copiedUrl ? '✓ Copied!' : 'Copy URL'}
              </button>
              <button
                className="selected-panel__copy-btn selected-panel__copy-btn--secondary"
                onClick={handleOpenPreview}
              >
                Preview →
              </button>
            </div>
          </div>

          <div className="selected-panel__section">
            <h3 className="selected-panel__subtitle">Embed Code</h3>
            <div className="selected-panel__code">
              <pre>{generateEmbedCode()}</pre>
            </div>
            <button
              className="selected-panel__copy-btn"
              onClick={handleCopyEmbed}
            >
              {copiedEmbed ? 'Copied!' : 'Copy Embed Code'}
            </button>
          </div>

          <div className="selected-panel__section">
            <h3 className="selected-panel__subtitle">NPM Usage</h3>
            <div className="selected-panel__code">
              <pre>{generateNpmCode()}</pre>
            </div>
            <button
              className="selected-panel__copy-btn"
              onClick={handleCopyNpm}
            >
              {copiedNpm ? 'Copied!' : 'Copy NPM Code'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectedIconsPanel;

