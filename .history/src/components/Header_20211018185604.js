import React from 'react';
import data from '../data.json';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid d-flex justify-content-between">
        <a class="display-2" href="#">THE PLANETS</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {
              data.map(d => (
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">{d.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}



export default Header