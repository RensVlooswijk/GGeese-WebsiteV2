import React from 'react';
import './DarkAccents.css';

const DarkAccents = () => {
  return (
    <div className="dark-accents-container">
      {/* Animated gradient orbs in corners - subtle */}
      <div className="corner-glow corner-glow-purple top-left" />
      <div className="corner-glow corner-glow-pink top-right" />
      <div className="corner-glow corner-glow-cyan bottom-left" />
      <div className="corner-glow corner-glow-purple bottom-right" />
      
      {/* Subtle grid pattern */}
      <div className="grid-overlay" />
      
      {/* Floating particles - very subtle */}
      <div className="particles-container">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      {/* Subtle vertical lines accent */}
      <div className="accent-lines">
        <div className="accent-line accent-line-purple" style={{ left: '20%' }} />
        <div className="accent-line accent-line-pink" style={{ left: '50%' }} />
        <div className="accent-line accent-line-cyan" style={{ left: '80%' }} />
      </div>
    </div>
  );
};

export default DarkAccents;
