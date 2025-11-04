import React from 'react';
import './AnimatedBubbles.css';

const AnimatedBubbles = () => {
  return (
    <div className="bubbles-container">
      {/* Large central bubble - purple */}
      <div className="bubble bubble-large bubble-purple" style={{
        left: '15%',
        top: '20%',
        animationDelay: '0s',
        animationDuration: '20s'
      }} />
      
      {/* Large bubble - pink */}
      <div className="bubble bubble-large bubble-pink" style={{
        right: '10%',
        top: '15%',
        animationDelay: '3s',
        animationDuration: '25s'
      }} />
      
      {/* Large bubble - cyan */}
      <div className="bubble bubble-large bubble-cyan" style={{
        left: '50%',
        bottom: '15%',
        animationDelay: '6s',
        animationDuration: '22s'
      }} />
      
      {/* Medium bubble - purple */}
      <div className="bubble bubble-medium bubble-purple" style={{
        left: '5%',
        bottom: '25%',
        animationDelay: '2s',
        animationDuration: '18s'
      }} />
      
      {/* Medium bubble - pink */}
      <div className="bubble bubble-medium bubble-pink" style={{
        right: '20%',
        bottom: '20%',
        animationDelay: '5s',
        animationDuration: '23s'
      }} />
      
      {/* Medium bubble - cyan */}
      <div className="bubble bubble-medium bubble-cyan" style={{
        left: '40%',
        top: '10%',
        animationDelay: '8s',
        animationDuration: '19s'
      }} />
      
      {/* Small bubble - purple */}
      <div className="bubble bubble-small bubble-purple" style={{
        right: '35%',
        top: '35%',
        animationDelay: '4s',
        animationDuration: '21s'
      }} />
      
      {/* Small bubble - pink */}
      <div className="bubble bubble-small bubble-pink" style={{
        left: '25%',
        bottom: '10%',
        animationDelay: '7s',
        animationDuration: '17s'
      }} />
      
      {/* Small bubble - cyan */}
      <div className="bubble bubble-small bubble-cyan" style={{
        right: '45%',
        bottom: '35%',
        animationDelay: '9s',
        animationDuration: '24s'
      }} />
      
      {/* Extra small bubble - pink */}
      <div className="bubble bubble-xsmall bubble-pink" style={{
        left: '70%',
        top: '40%',
        animationDelay: '10s',
        animationDuration: '16s'
      }} />
    </div>
  );
};

export default AnimatedBubbles;
