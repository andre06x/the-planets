import React, { useEffect, useState } from 'react';
// import earth from '../assets/planet-earth.svg';
import data from '../data.json';
import { usePlanet } from '../zustand';

const Container = () => {
  const [selectBox, setSelectBox] = useState(1);
  const planet = usePlanet(state => state.planet);
  // const [planet, setPlanet] = useState('Earth');
  const [text, setText] = useState(data.filter(d => d.name === planet)[0].overview);
  const [imagee, setImagee] = useState('assets/planet-earth.svg');
  const [dataPlanet, setDataPlanet] = useState(['']);



  const op = [
    { id: 1, titulo: 'Overview' },
    { id: 2, titulo: 'INTERNAL STRUCTURE' },
    { id: 3, titulo: 'SURFACE GEOLOGY' },
  ]

  function buttonChange(o) {
    setSelectBox(o.id);

    if (o.id === 1) {
      setText(data.filter(d => d.name === planet)[0].overview);
      setImagee(data.filter(d => d.name === planet)[0].images.planet);
    }

    if (o.id === 2) {
      setText(data.filter(d => d.name === planet)[0].structure);
      setImagee(data.filter(d => d.name === planet)[0].images.internal);

    }

    if (o.id === 3) {
      setText(data.filter(d => d.name === planet)[0].geology);
      setImagee(data.filter(d => d.name === planet)[0].images.geology);

    }

  }

  useEffect(() => {
    setDataPlanet(data.filter(d => d.name === planet)[0]);
    setImagee(data.filter(d => d.name === planet)[0].images.planet);
    setText(data.filter(d => d.name === planet)[0].overview);
    setSelectBox(1);

  }, [planet]);
  return (
    <div className="container mt-md-5">
      <div className="d-flex flex-column">
        <div className="d-flex flex-md-row flex-column-reverse justify-content-between">
          <div className="me-md-5 d-flex justify-content-center position-relative">
            <img src={imagee} alt="" />
            <img src="assets/geology-neptune.png" alt="" className="position-absolute top-50 start-50 translate-middle"/>
          </div>
          <div className="ms-md-5 d-flex flex-md-column flex-column-reverse">
            <h1 className="display-1 text-light font-antonio fw-bold text-center">
              {planet}
            </h1>
            <p className="lead text-muted font-antonio text-center">
              {text.content}
            </p>
            <span className="text-secondary">
              Source: <a href="" className="text-secondary"> Wikip??dia</a>
            </span>

            <div className="d-flex flex-md-column mt-md-3 font-antonio fw-bold">
              {op.map(o => (
                <button
                  className={`btn text-light btn-outline-primary mb-3 col-4 col-md-12 ${selectBox === o.id ? ' btn-primary' : ''}`}
                  onClick={() => buttonChange(o)}
                >
                  {o.titulo}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-5 flex-md-row flex-column">
        <div class="col me-3 bg-transparent border">
          <div class="card-body d-flex flex-md-column justify-content-between align-items-center">
            <h6 class="card-subtitle mb-md-2 text-muted">
              ROTATION TIME
            </h6>
            <p class="card-text text-light font-antonio fs-md-1 fs-3">
              {dataPlanet.rotation}
            </p>
          </div>
        </div>
        <div class="card col me-3 bg-transparent border">
          <div class="card-body d-flex flex-md-column justify-content-between align-items-center">
            <h6 class="card-subtitle mb-md-2 text-muted">
              REVOLUTION TIME
            </h6>
            <p class="card-text text-light font-antonio fs-md-1 fs-3">
              {dataPlanet.revolution}
            </p>
          </div>
        </div>
        <div class="card col me-3 bg-transparent border">
          <div class="card-body d-flex flex-md-column justify-content-between align-items-center">
            <h6 class="card-subtitle mb-md-2 text-muted">
              RADIUS
            </h6>
            <p class="card-text text-light font-antonio fs-md-1 fs-3">
              {dataPlanet.radius}
            </p>
          </div>
        </div>
        <div class="card col me-3 bg-transparent border">
          <div class="card-body d-flex flex-md-column justify-content-between align-items-center">
            <h6 class="card-subtitle mb-md-2 text-muted">
              AVERAGE TEMP.
            </h6>
            <p class="card-text text-light font-antonio fs-md-1 fs-3">
              {dataPlanet.temperature}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container;