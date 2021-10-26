import React from 'react';
import earth from '../assets/planet-earth.svg';

const Container = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between">
          <div className="me-5">
            <img src={earth} alt="" />
          </div>
          <div className="ms-md-5">
            <h1 className="display-1 text-light font-antonio fw-bold">EARTH</h1>
            <p className="lead text-light">
              Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.
            </p>
            <span>
              Source: <a href=""> <s>WIKIPEDIA</s></a>
            </span>
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