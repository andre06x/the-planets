import React from 'react';
import earth from '../assets/planet-earth.svg';

const Container = () => {
  return (
    <div className="container">
      <div>
        <img src={earth} width="400" alt="" />
      </div>
    </div>
  )
}

export default Container;