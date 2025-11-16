import React from 'react';
import { iconsData } from '../data/icons';

/**
 * LogoHtml component - displays a logo SVG
 * @param {string} size - size of the logo (default: '24px')
 * @param {string} color - color of the logo (uses icon's default color)
 */
export const LogoHtml = ({ size = '24px', color }) => {
  const logoIcon = iconsData.find(icon => icon.id === 'html5');
  return logoIcon ? (
    <IconComponent icon={logoIcon} size={size} color={color} />
  ) : null;
};

/**
 * Generic Icon component
 * @param {string} id - icon id from iconsData
 * @param {string} size - icon size (default: '24px')
 * @param {string} color - icon color (uses icon's default color if not provided)
 */
export const Icon = ({ id, size = '24px', color }) => {
  const icon = iconsData.find(i => i.id === id);
  return icon ? <IconComponent icon={icon} size={size} color={color} /> : null;
};

/**
 * Internal component to render icon
 */
const IconComponent = ({ icon, size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color || icon.color}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
      style={{ display: 'inline-block' }}
    />
  );
};

/**
 * Get all available icons
 */
export const getAllIcons = () => iconsData;

/**
 * Get icons by category
 * @param {string} category - category name (e.g., 'social', 'development')
 */
export const getIconsByCategory = (category) => {
  return iconsData.filter(icon => icon.category === category);
};

/**
 * Search icons by name or category
 * @param {string} query - search query
 */
export const searchIcons = (query) => {
  const lowerQuery = query.toLowerCase();
  return iconsData.filter(icon => 
    icon.name.toLowerCase().includes(lowerQuery) ||
    icon.category.toLowerCase().includes(lowerQuery)
  );
};

// Export all individual icons as components
export const Facebook = (props) => <Icon id="facebook" {...props} />;
export const Instagram = (props) => <Icon id="instagram" {...props} />;
export const Github = (props) => <Icon id="github" {...props} />;
export const Twitter = (props) => <Icon id="twitter" {...props} />;
export const YouTube = (props) => <Icon id="youtube" {...props} />;
export const LinkedIn = (props) => <Icon id="linkedin" {...props} />;
export const TikTok = (props) => <Icon id="tiktok" {...props} />;
export const Discord = (props) => <Icon id="discord" {...props} />;
export const Slack = (props) => <Icon id="slack" {...props} />;
export const NPM = (props) => <Icon id="npm" {...props} />;
export const ReactIcon = (props) => <Icon id="react" {...props} />;
export const Vue = (props) => <Icon id="vue" {...props} />;
export const Spotify = (props) => <Icon id="spotify" {...props} />;
export const Twitch = (props) => <Icon id="twitch" {...props} />;
export const Google = (props) => <Icon id="google" {...props} />;
export const Pinterest = (props) => <Icon id="pinterest" {...props} />;
export const Reddit = (props) => <Icon id="reddit" {...props} />;
export const WhatsApp = (props) => <Icon id="whatsapp" {...props} />;
export const Telegram = (props) => <Icon id="telegram" {...props} />;
export const Snapchat = (props) => <Icon id="snapchat" {...props} />;
export const Medium = (props) => <Icon id="medium" {...props} />;
export const HTML5 = (props) => <Icon id="html5" {...props} />;
export const CSS3 = (props) => <Icon id="css3" {...props} />;
export const JavaScript = (props) => <Icon id="javascript" {...props} />;
export const Python = (props) => <Icon id="python" {...props} />;
export const Java = (props) => <Icon id="java" {...props} />;
export const PHP = (props) => <Icon id="php" {...props} />;
export const NodeJS = (props) => <Icon id="nodejs" {...props} />;
export const TypeScript = (props) => <Icon id="typescript" {...props} />;
export const Angular = (props) => <Icon id="angular" {...props} />;
export const Docker = (props) => <Icon id="docker" {...props} />;
export const Git = (props) => <Icon id="git" {...props} />;
export const MongoDB = (props) => <Icon id="mongodb" {...props} />;
export const PostgreSQL = (props) => <Icon id="postgresql" {...props} />;
export const VSCode = (props) => <Icon id="vscode" {...props} />;
export const Figma = (props) => <Icon id="figma" {...props} />;
export const Bootstrap = (props) => <Icon id="bootstrap" {...props} />;
export const Tailwind = (props) => <Icon id="tailwind" {...props} />;
export const WordPress = (props) => <Icon id="wordpress" {...props} />;
export const Sass = (props) => <Icon id="sass" {...props} />;
export const Flutter = (props) => <Icon id="flutter" {...props} />;
export const Swift = (props) => <Icon id="swift" {...props} />;
export const Kotlin = (props) => <Icon id="kotlin" {...props} />;
export const Go = (props) => <Icon id="go" {...props} />;
export const Ruby = (props) => <Icon id="ruby" {...props} />;

// Alias for LogoHtml
export const logoHtml = LogoHtml;
