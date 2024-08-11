// src/components/Logo.jsx

import React from 'react';

const Logo = ({ src, alt, width, height }) => {
  return (
    <div>
      <img src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default Logo;