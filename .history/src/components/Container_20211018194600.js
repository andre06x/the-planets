import React from 'react';
import earth from '../assets/planet-earth.svg';

const Container = () => {
  return (
    <div className="container mx-auto">
      <div>
        <img src={earth} alt="" />
      </div>
    </div>
  )
}

export default Container;