import React from 'react';
import './Header.css';
import HeaderImg from '../img/headerImg.png';

function Header() {
  return (
    <div className='card mb-3 header-card'>
      <div className='row g-0'>
        <div className='col-md-8 header-card-body'>
          <div className='card-body'>
            <h2 className='card-title'>Hello! I'm Ying Li,</h2>
            <p className='card-text'> a Software Developer interested in pursuit of problem solving skills.</p>
          </div>
        </div>
        <div className='col-md-3 header-image'>
          <img src={HeaderImg} className='img-fluid rounded-start' alt='A picture of Ying taken in Quebec' width={3024 / 14} height={4032 / 14} />
        </div>
      </div>
    </div>
  );
}

export default Header;
