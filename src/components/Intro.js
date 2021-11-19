import React from 'react';
import './Intro.css';
import HeaderImg from '../img/headerImg.png';

function Intro() {
  return (
    <div className='card mb-3 header-card'>
      <div className='row g-0'>
        <div className='col-md-8 header-card-body'>
          <div className='card-body'>
            <h2 className='card-title'>Hello! I'm Ying Li,</h2>
            <p className='card-text'>
              {' '}
              This is my react portfolio page. I am a recent graduate in web development and eager
              to learn. Please go to my projects to see what projects and skill I have done and
              learn to becoming a web developer.
            </p>
          </div>
        </div>
        <div className='col-md-3 header-image'>
          <img
            src={HeaderImg}
            className='img-fluid rounded-start'
            alt='A picture of Ying taken in Quebec'
            width={3024 / 14}
            height={4032 / 14}
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
