import React from "react";
import { Carousel } from "react-carousel-minimal";
import one from "../../resource/detail1.jpg"
import two from "../../resource/detail2.jpg"
import three from "../../resource/detail3.jpg"
import four from "../../resource/detail4.jpg"
import five from "../../resource/detail5.jpg"
import six from "../../resource/detail6.jpg"
import seven from "../../resource/detail7.jpg"


export default function CarouselApp() {
  const data = [
    {
      image: one,
      caption: "Hotel",
    },
    {
      image: two,
      caption: "Triluxy",
    },
    {
      image: three,
      caption: "Booked",
    },
    {
      image: four,
      caption: "San Francisco",
    },
    {
      image: five,
      caption: "San Francisco",
    },
    {
      image: six,
      caption: "San Francisco",
    },
    {
      image: seven,
      caption: "San Francisco",
    },
    {
      image: two,
      caption: "San Francisco",
    }
  ];
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div
      style={
        {
          // padding: "0 40px"
        }
      }
    >
      <Carousel
        data={data}
        time={2000}
        width="100%"
        height="49vh"
        captionStyle={captionStyle}
        radius="0px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        style={{}}
        thumbnails={true}
        thumbnailWidth="100px"
      />
    </div>
  );
}
