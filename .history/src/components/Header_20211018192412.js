import React from 'react';
import data from '../data.json';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid d-flex justify-content-between">
        <a class="navbar-brand fs-3 text-light" href="#">THE PLANETS</a>
        <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon text-light"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {
                data.map(d => (
                  <li class="nav-item">
                    <a class="nav-link active text-light fs-5" aria-current="page" href="#">{d.name}</a>
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