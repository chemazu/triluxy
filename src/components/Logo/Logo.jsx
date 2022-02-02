import React from 'react';
import logo from '../../imgs/Logo.svg' 
import './Logo.scss'


export default function Logo() {
  return <div className='Logo'>
      <img src={logo}/>

      <h2>Booked</h2>
  </div>;
}
