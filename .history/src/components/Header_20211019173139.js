import React, { useEffect } from 'react';
import data from '../data.json';
import { usePlanet } from '../zustand';

const Header = () => {
  const planetSetar = usePlanet(state => state.nomePlanet);
  const planet = usePlanet(state => state.planet);

  useEffect(() => {
    console.log(planet)
  }, [planet])

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent border-bottom border-muted ">
      <div class="container-fluid d-flex justify-content-between">
        <a class="navbar-brand fs-1 text-light font-antonio" href="#a">THE PLANETS</a>
        <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon text-light"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {
                data.map(d => (
                  <li class="nav-item">
                    <a 
                      class="nav-link active text-light fs-5 font-antonio" 
                      aria-current="page" 
                      href={window.innerWidth < 750 ? '#text' : ''}
                      onClick={() => planetSetar(d.name)}
                    > 
                      {d.name}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}



export default Header