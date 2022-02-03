import React from 'react';
import "./style.scss"
import LocationCard from '../LocationCard';

export default function Location(props) {
  const {title,subtext} = props
  return <div className='location'>
    <h2>{title}</h2>
    <p>{subtext}</p>
    <div className="upper"> <LocationCard/>
    <LocationCard/>
    <LocationCard/></div>
    <div className="lower">
    <LocationCard/>
    <LocationCard/>
    </div>
   
    

  </div>;
}
