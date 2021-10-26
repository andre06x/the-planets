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
    { id: 1, titulo: '01 Overview' },
    { id: 2, titulo: '02 INTERNAL STRUCTURE' },
    { id: 3, titulo: '03 SURFACE GEOLOGY' },
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
    <div className="container mt-5">
      <div className="d-flex flex-column">
        <div className="d-flex flex-md-row flex-reverse justify-content-between">
          <div className="me-5">
            <img src={imagee} alt="" />
          </div>
          <div className="ms-md-5 d-flex flex-md-column flex-column-reverse">
            <h1 className="display-1 text-light font-antonio fw-bold">
              {planet}
            </h1>
            <p className="lead text-muted font-antonio">
              {text.content}
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
            <h6 class="card-subtitle mb-2 text-muted">
              ROTATION TIME
            </h6>
            <p class="card-text text-light font-antonio fs-1">
              {dataPlanet.rotation}
            </p>
          </div>
        </div>
        <div class="card col me-3 bg-transparent border">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">
              REVOLUTION TIME
            </h6>
            <p class="card-text text-light font-antonio fs-1">
              {dataPlanet.revolution}
            </p>
          </div>
        </div>
        <div class="card col me-3 bg-transparent border">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">
              RADIUS
            </h6>
            <p class="card-text text-light font-antonio fs-1">
              {dataPlanet.radius}
            </p>
          </div>
        </div>
        <div class="card col me-3 bg-transparent border">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">
              AVERAGE TEMP.
            </h6>
            <p class="card-text text-light font-antonio fs-1">
              {dataPlanet.temperature}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container;