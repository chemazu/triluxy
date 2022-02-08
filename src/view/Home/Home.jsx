import React,{useEffect} from "react";
import Banner from "../../components/Banner";
import Browse from "../../components/Browse";
import Location from "../../components/Location";
import Subscribe from "../../components/Subscribe";
import Advert from "../../components/Advert";
import "./Home.scss";

export default function Home() {
  useEffect(() => {
      console.log('eggs')
  });

  return (
    <div>
      <Banner />
      <Browse
        title="Browse by hotel type"
        subtext="These popular hotels have a lot to offer"
      />
      <Advert />
      <Location
        title="Popular cities with travellers"
        subtext="See the top destinations people are traveling to"
      />
      <Browse
        title="Today's Top Hotel Deals "
        subtext="A selection of the best hotel deals, only available today"
      />
      <Location title="Get Inspiration for your next trip" />
      <Subscribe />
    </div>
  );
}
