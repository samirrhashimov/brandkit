import React from 'react';
import IconCard from './IconCard.jsx';
import '../styles/IconGrid.css';

const IconGrid = ({ icons, selectedIcons, onIconSelect, enableLazyLoad = false }) => {
  const handleIntersect = () => {
    // Placeholder for lazy load intersection
  };

  const isIconSelected = (iconId) => {
    return selectedIcons.some((icon) => icon.id === iconId);
  };

  return (
    <div className="icon-grid">
      {icons.length === 0 ? (
        <div className="icon-grid__empty">
          <p>No icons found</p>
        </div>
      ) : (
        icons.map((icon) => (
          <IconCard
            key={icon.id}
            icon={icon}
            isSelected={isIconSelected(icon.id)}
            onSelect={onIconSelect}
            isLazy={enableLazyLoad}
            onIntersect={handleIntersect}
          />
        ))
      )}
    </div>
  );
};

export default IconGrid;
