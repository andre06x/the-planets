import React from 'react';
import earth from '../assets/planet-earth.svg';

const Container = () => {
  return (
    <div className="container">
      <div>
        <img src={earth} alt="" />
      </div>
      <div>
        <h1 className="display-1 text-light font-antonio fw-bold">EARTH</h1>
      </div>
    </div>
  )
}

export default Container;