import React from "react";
import Banner from "../../components/Banner";
import Browse from "../../components/Browse";
import Header from "../../components/Header/Header";
import Location from "../../components/Location";
import Subscribe from "../../components/Subscribe";
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Browse
        title="Browse by hotel type"
        subtext="These popular hotels have a lot to offer"
      />
      <Location title="Popular cities with travellers"
        subtext="See the top destinations people are traveling to"/>
        

 
      <Browse
        title="Browse popular locations"
        subtext="These popular locations have a lot to offer"
      />
      <Location title="Get Inspiration for your next trip" />
      <Subscribe />
      <Browse
        title="Connect with other Travellers"
        subtext="These popular hotels have a lot to offer"
      />
    </div>
  );
}
