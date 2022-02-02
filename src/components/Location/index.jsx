import React from 'react';
import "./style.scss"
import LocationCard from '../LocationCard';

export default function Location(props) {
  const {title} = props
  return <div className='location'>
    <h2>{title}</h2>
    <div className="upper"> <LocationCard/>
    <LocationCard/>
    <LocationCard/></div>
    <div className="lower">
    <LocationCard/>
    <LocationCard/>
    </div>
   
    

  </div>;
}
