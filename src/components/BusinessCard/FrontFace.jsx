import React from 'react';
import logo from '../../assets/logo-osteosystem.png';

const FrontFace = () => {
  return (
    <div className="face-content front-face-content">
      <svg className="front-bg-svg" viewBox="0 0 1000 571" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top right green wave (drawn first, under blue) */}
        <path d="M500,0 L1000,0 L1000,150 C800,150 600,100 500,0 Z" fill="#5abf1c" />
        
        {/* Top dark blue main wave - no hole at top, flat/slight dip in middle */}
        <path d="M0,0 L1000,0 C600,160 300,150 0,150 Z" fill="#003b6d" />

        {/* Top left gray wave */}
        <path d="M0,0 L300,0 C150,20 50,50 0,100 Z" fill="#8a9ca8" />

        {/* Bottom left green wave */}
        <path d="M0,320 C150,450 350,571 600,571 L0,571 Z" fill="#5abf1c" />
        
        {/* Bottom dark blue wave */}
        <path d="M0,400 C200,500 500,571 800,571 L0,571 Z" fill="#003b6d" />
      </svg>
      
      <div className="logo-container">
        <img src={logo} alt="Osteo Systems Logo" className="logo" />
      </div>
    </div>
  );
};

export default FrontFace;
