import React from 'react';

const Logo = () => {
  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',  // Main text color
  };

  const accentStyle = {
    color: '#e74c3c',  // Accent color
  };

  return (
    <div style={logoStyle}>
      <span style={titleStyle}>
        Cine<span style={accentStyle}>Reserve</span>
      </span>
    </div>
  );
};

export default Logo;
