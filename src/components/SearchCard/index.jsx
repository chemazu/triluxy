import React from "react";
import Button from "../Button";
import "./style.scss";
import bar from "../../imgs/bar.svg"
import pool from "../../imgs/pool.svg"
import wifi from "../../imgs/wifi.svg"

import gym from "../../imgs/gym.svg"
import food from "../../imgs/food.svg"



export default function SearchCard() {
  return (
    <div className="search-card">
      <div className="search-image"></div>
      <div className="search-info">
        <div className="title">
          <h3>Oaks Ibn Battuta Gate Dubai</h3>
          <p>Ajao Estate, Lagos - 35/37 Murtala Mohamed Intl Airport</p>
        </div>
        <div className="address">
          <p>
            King Room with City View
          </p>
          <div className="amenities">
              <div><img src={food}/>
              <p>Restaurant</p></div>
              <div><img src={gym}/>
              <p>Gym</p></div>
              {/* <div><img src={pool}/>
              <p>Pool</p></div>
              <div><img src={wifi}/>
              <p>Internet</p></div>
              <div><img src={bar}/>
              <p>Bar</p></div> */}


          </div>
        </div>
      </div>
      <div className="search-actions">
        <p>Price</p>
        <p>reviews</p>

        <Button title="Book Now" />
      </div>
    </div>
  );
}
