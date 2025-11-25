import React from 'react';
import '../styles/IconCard.css';

const IconCard = ({ icon, isSelected, onSelect, isLazy, onIntersect }) => {
  const iconRef = React.useRef(null);

  React.useEffect(() => {
    if (!isLazy || !iconRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect(icon.id);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = iconRef.current;
    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isLazy, icon.id, onIntersect]);

  const handleClick = () => {
    onSelect(icon);
  };

  return (
    <div
      ref={iconRef}
      className={`icon-card ${isSelected ? 'icon-card--selected' : ''}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Select ${icon.name} icon`}
    >
      <div
        className="icon-card__icon"
        dangerouslySetInnerHTML={{ __html: icon.svg }}
      />
      <p className="icon-card__name">{icon.name}</p>
    </div>
  );
};

export default IconCard;
