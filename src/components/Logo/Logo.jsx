import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/Logo.svg' 
import './Logo.scss'


export default function Logo() {
  return <div >
    <Link to="/" className='Logo'>
      <img src={logo}/>

      <h2>Booked</h2>
      </Link>
  </div>;
}
