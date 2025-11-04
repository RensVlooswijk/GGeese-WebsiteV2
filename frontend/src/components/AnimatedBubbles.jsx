import React from 'react';
import './AnimatedBubbles.css';

const AnimatedBubbles = () => {
  return (
    <div className="bubbles-container">
      {/* Large central bubble - purple */}
      <div className="bubble bubble-large bubble-purple" style={{
        left: '20%',
        top: '30%',
        animationDelay: '0s',
        animationDuration: '20s'
      }} />
      
      {/* Medium bubble - pink */}
      <div className="bubble bubble-medium bubble-pink" style={{
        right: '15%',
        top: '20%',
        animationDelay: '3s',
        animationDuration: '25s'
      }} />
      
      {/* Large bubble - cyan */}
      <div className="bubble bubble-large bubble-cyan" style={{
        left: '60%',
        bottom: '25%',
        animationDelay: '6s',
        animationDuration: '22s'
      }} />
      
      {/* Small bubble - purple */}
      <div className="bubble bubble-small bubble-purple" style={{
        left: '10%',
        bottom: '15%',
        animationDelay: '2s',
        animationDuration: '18s'
      }} />
      
      {/* Medium bubble - pink */}
      <div className="bubble bubble-medium bubble-pink" style={{
        right: '25%',
        bottom: '30%',
        animationDelay: '5s',
        animationDuration: '23s'
      }} />
      
      {/* Small bubble - cyan */}
      <div className="bubble bubble-small bubble-cyan" style={{
        left: '45%',
        top: '15%',
        animationDelay: '8s',
        animationDuration: '19s'
      }} />
      
      {/* Extra small bubble - purple */}
      <div className="bubble bubble-xsmall bubble-purple" style={{
        right: '40%',
        top: '40%',
        animationDelay: '4s',
        animationDuration: '21s'
      }} />
      
      {/* Extra small bubble - pink */}
      <div className="bubble bubble-xsmall bubble-pink" style={{
        left: '30%',
        bottom: '20%',
        animationDelay: '7s',
        animationDuration: '17s'
      }} />
    </div>
  );
};

export default AnimatedBubbles;
