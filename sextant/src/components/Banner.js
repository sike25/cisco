import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="banner">
      <img id="logo" src={require('../media/ciscologo.png')} alt ="Cisco Logo" />
      <h1> Sextant Network Dashboard </h1>
    </div>
  );
}

export default Banner
