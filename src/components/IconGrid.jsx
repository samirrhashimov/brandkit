import React from 'react';
import IconCard from './IconCard';
import '../styles/IconGrid.css';

const IconGrid = ({ icons, selectedIcons, onIconSelect, enableLazyLoad = false }) => {
  const [loadedIcons, setLoadedIcons] = React.useState(new Set());

  const handleIntersect = (iconId) => {
    setLoadedIcons((prev) => new Set([...prev, iconId]));
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

