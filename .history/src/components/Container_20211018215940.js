import React, { useState } from 'react';
import earth from '../assets/planet-earth.svg';

const Container = () => {
  const [selectBox, setSelectBox] = useState(1);

  const op = [
    { id: 1, titulo: '01 Overview' },
    { id: 2, titulo: '02 INTERNAL STRUCTURE' },
    { id: 3, titulo: '03 SURFACE GEOLOGY' },
  ]

  function buttonChange(o){
    setSelectBox(o.id)
  }
  return (
    <div className="container mt-5">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between">
          <div className="me-5">
            <img src={'/assets/geology-jupiter.png'} alt="" />
          </div>
          <div className="ms-md-5">
            <h1 className="display-1 text-light font-antonio fw-bold">EARTH</h1>
            <p className="lead text-muted font-antonio">
              Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.
            </p>
            <span className="text-secondary">
              Source: <a href="" className="text-secondary"> Wikipédia</a>
            </span>

            <div className="d-flex flex-column mt-3 font-antonio fw-bold">
              {op.map(o => (
                <button
                  className={`btn text-light btn-outline-primary mb-3 ${selectBox === o.id ? ' btn-primary' : ''}`}
                  onClick={() => buttonChange(o)}
                >
                  {o.titulo}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div class="col me-3 bg-transparent border">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">ROTATION TIME</h6>
            <p class="card-text text-light font-antonio fs-1">0.99 days.</p>
          </div>
        </div>
        <div class="card col me-3 bg-transparent border">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">REVOLUTION TIME</h6>
            <p class="card-text text-light font-antonio fs-1">365.26 DAYS</p>
          </div>
        </div>
        <div class="card col me-3 bg-transparent border">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">RADIUS</h6>
            <p class="card-text text-light font-antonio fs-1">6,371 KM</p>
          </div>
        </div>
        <div class="card col me-3 bg-transparent border">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">AVERAGE TEMP.</h6>
            <p class="card-text text-light font-antonio fs-1">16°C</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container;