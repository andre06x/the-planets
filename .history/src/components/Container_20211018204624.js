import React, { useState } from 'react';
import earth from '../assets/planet-earth.svg';

const Container = () => {
  const [selectBox, setSelectBox] = useState(['']);

  const op = [
    { id: 1, titulo: '01 Overview' },
    { id: 2, titulo: '02 INTERNAL STRUCTURE' },
    { id: 3, titulo: '03 SURFACE GEOLOGY' },
  ]
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
            <span className="text-secondary">
              Source: <a href="" className="text-secondary"> Wikipédia</a>
            </span>

            <div className="d-flex flex-column mt-3 font-antonio fw-bold">
              {op.map(o => (
                <button
                  className={`btn text-light btn-outline-primary mb-3 ${selectBox === o.id ? 'bg-primary' : ''}`}
                  onClick={() => setSelectBox(o.id)}
                >
                  {o.titulo}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="card col-md-4">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">ROTATION TIME</h6>
            <p class="card-text">0.99 days.</p>
          </div>
        </div>
        <div class="card col-md-4">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">ROTATION TIME</h6>
            <p class="card-text">0.99 days.</p>
          </div>
        </div>
        <div class="card col-md-4">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">ROTATION TIME</h6>
            <p class="card-text">0.99 days.</p>
          </div>
        </div>
        <div class="card col-md-4">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">ROTATION TIME</h6>
            <p class="card-text">0.99 days.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container;