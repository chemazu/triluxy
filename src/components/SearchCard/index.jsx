
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ImportContent from '../../resource';
import Button from '../Button';
import "./style.scss";
export default function SearchCard(props) {
  const history = useNavigate()
  const { title, review, location, rating, description,roomType,slug } = props.item
  const { hotel1, pin ,caretright} = ImportContent()
  return (
    <div className="search-card">
      <div className="desktop-card">
        <div className="left"><img src={hotel1} alt="title" /></div>
        <div className="right-card">
          <h3>{title}</h3>
          <div>
            <span ><img src={pin} />{location}</span> <span>Show on map</span><span>4.7 km from centre</span>
          </div>
          <div>
            <span >{description[0]}</span>
          </div>
        </div>
        <div className='last-card'>
          <div>
            <p className='rating' >{
              rating[0]}</p> Stars <strong style={{ color: "green" }} >"{rating[1]}"</strong>
          </div>
          <div style={{ padding: "5px 0px" }}>
          <span>{review.length} </span><span style={{ color: "#febb02" }} > reviews</span>
          </div>
          <div>
            <span>starting from </span> 
          </div>
          <div>
             <h2 style={{ padding: "5px 0px" }}>NGN {roomType[0].price}</h2>
          </div>
          <div>
            <p style={{ padding: "5px 0px", color:"grey" }} >edwerewwe</p>
          </div>
          {/* <Link to = {`/hotel/${slug}`}> */}
          <Button title="Book Now" onClick={()=>{
            history(`/hotel/${slug}`)
          }} />
          {/* </Link> */}
          <div>
          </div>
        </div>
      </div>
      <div className='mobile-card'>
        <div className="left"><img src={hotel1} alt="title" /></div>
        <div className="right-card">
          <h4>{title}</h4>
          <div style={{ justifyContent: "space-between" }}>
            <span className='rating'>{rating[0]}</span>
            <span>Stars </span>
            <span style={{ color: "green" }} >"{rating[1]}"</span>

            <span>{review.length} </span>
            <span style={{ color: "#febb02" }} > reviews</span></div>
          <div><img src={pin} />
            <span>{location}</span>
          </div>

        </div>
        <div className='final-card' ><h1><img src={caretright}/></h1></div>
      </div>
    </div>
  )
}
