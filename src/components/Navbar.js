import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logoYing from '../img/logoY.png';

function Navbar(setCurrentTab) {
  return (
    <nav className='navbar navbar-expand-lg navbar-expand-md navbar-black bg-black'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          <img src={logoYing} alt='logo' width='70' height='70' className='logo' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
        >
          <span className='navbar-toggler-icon'></span>
          <span className='navbar-toggler-icon'></span>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='navbar-link' to='/' exact>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='navbar-link' to='/projects' exact>
                PROJECTS
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='navbar-link' to='/contact' exact>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
