// import React from "react";
// import Button from "../Button";
// import bar from "../../imgs/bar.svg"
// import pool from "../../imgs/pool.svg"
// import wifi from "../../imgs/wifi.svg"

// import gym from "../../imgs/gym.svg"
// import food from "../../imgs/food.svg"



// export default function SearchCard() {
//   return (
//     <div className="search-card">
//       <div className="search-image"></div>
//       <div className="search-info">
//         <div className="title">
//           <h3>Oaks Ibn Battuta Gate Dubai</h3>
//           <p>Ajao Estate, Lagos - 35/37 Murtala Mohamed Intl Airport</p>
//         </div>
//         <div className="address">
//           <p>
//             King Room with City View
//           </p>
//           <div className="amenities">
//               <div><img src={food}/>
//               <p>Restaurant</p></div>
//               <div><img src={gym}/>
//               <p>Gym</p></div>
//               {/* <div><img src={pool}/>
//               <p>Pool</p></div>
//               <div><img src={wifi}/>
//               <p>Internet</p></div>
//               <div><img src={bar}/>
//               <p>Bar</p></div> */}


//           </div>
//         </div>
//       </div>
//       <div className="search-actions">
//         <p>Price</p>
//         <p>reviews</p>

//         <Button title="Book Now" />
//       </div>
//     </div>
//   );
// }
import React from 'react'
import ImportContent from '../../resource';
import "./style.scss";


export default function SearchCard(props) {
  const {title,review,location,rating} = props.item
  console.log(props.item)
  const {hotel1,pin }=ImportContent()

  return (
    <div className='search-card'>
      <div className="left"><img src={hotel1} alt="title"/></div>
      <div className="right">
        <h4>{title}</h4>
        <div style={{justifyContent:"space-between"}}><span className='rating'>{rating[0]}</span> <span style={{color:"green"}} >{rating[1]}</span><span>{review.length} </span><span style={{color:"#febb02"}} > reviews</span></div>
        <div><img src={pin}/>
        <span>{location}</span>
        </div>
        
      </div>
    </div>
  )
}
