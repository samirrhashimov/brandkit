import React from 'react';
import { useParams } from 'react-router-dom';
import { getIconById } from '../data/icons';
import '../styles/IconEmbed.css';

const IconEmbed = () => {
  const { iconIds } = useParams();
  const [icons, setIcons] = React.useState([]);
  const [size, setSize] = React.useState('48');

  React.useEffect(() => {
    if (!iconIds) {
      setIcons([]);
      return;
    }

    const queryParams = new URLSearchParams(window.location.search);
    const sizeParam = queryParams.get('size');
    if (sizeParam) {
      setSize(sizeParam);
    }

    const ids = iconIds.split(',').map(id => id.trim().toLowerCase());
    const foundIcons = ids
      .map(id => getIconById(id))
      .filter(icon => icon !== undefined);
    
    setIcons(foundIcons);
  }, [iconIds]);

  if (icons.length === 0) {
    return (
      <div className="icon-embed icon-embed--empty">
        <p>No icons found</p>
      </div>
    );
  }

  return (
    <div className="icon-embed">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="icon-embed__item"
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          <div
            className="icon-embed__svg"
            dangerouslySetInnerHTML={{ __html: icon.svg }}
            style={{ color: icon.color }}
            title={icon.name}
          />
        </div>
      ))}
    </div>
  );
};

export default IconEmbed;

