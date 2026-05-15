import React from 'react';
import orBg from '../../assets/or-background.png';

const BackFace = () => {
  return (
    <div className="face-content back-face-content">
      <div className="back-left-photo">
        <img src={orBg} alt="Operating Room" className="or-bg" />
      </div>

      <svg className="back-bg-svg" viewBox="0 0 1000 571" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        {/* Right side dark blue background */}
        <rect x="420" y="0" width="580" height="571" fill="#224863" />
        
        {/* Middle curved overlay wave */}
        <path d="M420,0 L520,0 C580,200 400,350 480,571 L380,571 C300,350 480,200 420,0 Z" fill="#2d5a7a" />
      </svg>
      
      {/* Background Graphic: Bone plate and EKG */}
      <div className="bg-graphic">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <g transform="rotate(45, 200, 200) scale(1.5) translate(30, -50)" opacity="0.05">
            {/* Abstract Bone Plate */}
            <path d="M100,50 C120,50 130,60 130,80 L130,250 C130,270 120,280 100,280 C80,280 70,270 70,250 L70,80 C70,60 80,50 100,50 Z" fill="white" />
            <circle cx="100" cy="80" r="8" fill="#224863" />
            <circle cx="100" cy="130" r="8" fill="#224863" />
            <circle cx="100" cy="180" r="8" fill="#224863" />
            <circle cx="100" cy="230" r="8" fill="#224863" />
            {/* Top wide part of plate */}
            <path d="M70,80 C50,80 40,60 50,40 C60,20 80,10 100,10 C120,10 140,20 150,40 C160,60 150,80 130,80 Z" fill="white" />
            <circle cx="70" cy="45" r="8" fill="#224863" />
            <circle cx="130" cy="45" r="8" fill="#224863" />
          </g>
        </svg>
      </div>

      <div className="back-right-content">
        <div className="header-info">
          <h2>LUISA VARELA</h2>
          <p>Directora Ejecutiva</p>
        </div>
        
        <div className="pulse-divider">
          <svg viewBox="0 0 200 40" width="100%" height="40" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,20 L80,20 L90,5 L100,35 L115,10 L125,20 L200,20" fill="none" stroke="#5abf1c" strokeWidth="2.5" strokeLinejoin="round" />
          </svg>
        </div>
        
        <div className="contact-list">
          <div className="contact-item">
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="white" width="18" height="18"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </div>
            <a href="https://wa.me/584249594187" target="_blank" rel="noopener noreferrer" className="contact-link" onClick={(e) => e.stopPropagation()}>0424-9594187</a>
          </div>
          <div className="contact-item">
            <div className="icon">
               <svg viewBox="0 0 24 24" fill="white" width="18" height="18"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            <a href="https://instagram.com/osteosystems_vzla" target="_blank" rel="noopener noreferrer" className="contact-link" onClick={(e) => e.stopPropagation()}>@osteosystems_vzla</a>
          </div>
          <div className="contact-item align-start">
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="white" width="18" height="18"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </div>
            <a href="https://maps.app.goo.gl/dFamM9dV6UuSDJCQ6" target="_blank" rel="noopener noreferrer" className="contact-link" onClick={(e) => e.stopPropagation()}>Multicentro Profesional<br/>Bicentenario, Mezzanina, Ofic 7</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackFace;
