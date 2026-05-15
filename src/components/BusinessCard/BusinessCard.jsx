import React, { useState, useEffect, useRef } from 'react';
import './BusinessCard.css';
import FrontFace from './FrontFace';
import BackFace from './BackFace';

const BusinessCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      // On mobile, show back face by default
      if (mobile) {
        setIsFlipped(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile || isFlipped) {
      setTilt({ x: 0, y: 0 });
      return;
    }

    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation limits (e.g., max 15 degrees)
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setTilt({ x: 0, y: 0 }); // Reset tilt when flipping
  };

  return (
    <div className="card-wrapper">
      <div 
        className={`card-container ${isFlipped ? 'flipped' : ''}`}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleFlip}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <div className="card-inner">
          <div className="card-face card-front">
            <FrontFace />
          </div>
          <div className="card-face card-back">
            <BackFace />
          </div>
        </div>
      </div>
      
      {isMobile && (
        <button className="flip-cta" onClick={handleFlip}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 2v6h-6"></path>
            <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
            <path d="M3 22v-6h6"></path>
            <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
          </svg>
          {isFlipped ? 'Ver Logo' : 'Ver Información'}
        </button>
      )}
    </div>
  );
};

export default BusinessCard;
