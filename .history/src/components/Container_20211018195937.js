import React from 'react';
import earth from '../assets/planet-earth.svg';

const Container = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between">
          <div className="mr-5">
            <img src={earth} alt="" />
          </div>
          <div>
            <h1 className="display-1 text-light font-antonio fw-bold">EARTH</h1>
          </div>
        </div>
      </div>
      <div>

      <h1 className="text-light">a</h1>
      </div>
    </div>
  )
}

export default Container;