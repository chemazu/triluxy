
import React from 'react'
import ImportContent from '../../resource';
import Button from '../Button';
import "./style.scss";


export default function SearchCard(props) {
  const {title,review,location,rating,description} = props.item
  console.log(props.item)
  const {hotel1,pin }=ImportContent()
  return (
    <div className="search-card">
      <div className="desktop-card">
      <div className="left"><img src={hotel1} alt="title"/></div>
      <div className="right-card">
        <h3>{title}</h3>
        <div>
        <span ><img src={pin}/>{location}</span> <span>Show on map</span><span>4.7 km from centre</span> 
        </div>
        <div>
          <span >{description[0]}</span>
        </div>
        
      </div>
      <div className='last-card'>
        <div>
        <p className='rating'>{
      rating[0]}</p> Stars <strong style={{color:"green"}} >"{rating[1]}"</strong>
        </div>
     
        <Button title="Show Prices"/>
        <div>
        <span>{review.length} </span><span style={{color:"#febb02"}} > reviews</span>
        <p></p>

        </div>
      </div>
      </div>
      <div className='mobile-card'>
      <div className="left"><img src={hotel1} alt="title"/></div>
      <div className="right-card">
        <h4>{title}</h4>
        <div style={{justifyContent:"space-between"}}><span className='rating'>{rating[0]}</span> Stars <span style={{color:"green"}} >"{rating[1]}"</span><span>{review.length} </span><span style={{color:"#febb02"}} > reviews</span></div>
        <div><img src={pin}/>
        <span>{location}</span>
        </div>
        
      </div>
    </div>
    </div>
  )
}
