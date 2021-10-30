import React from 'react';
import logoYing from '../logoY.png';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-expand-md navbar-dark bg-dark'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          <img src={logoYing} alt='logo' width='70' height='70' className='logo' />
        </a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='#'>
                HOME
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='#'>
                PORTFOLIOS
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='#'>
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
