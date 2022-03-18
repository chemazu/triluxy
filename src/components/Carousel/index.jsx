import React from "react";
import { Carousel } from "react-carousel-minimal";
import one from "../../imgs/register.jpg";
import two from "../../imgs/ghana.jpg";

export default function CarouselApp() {
  const data = [
    {
      image: two,
      caption: "San Francisco",
    },
    {
      image: two,
      caption: "San Francisco",
    },
    {
      image: two,
      caption: "San Francisco",
    },
    {
      image: two,
      caption: "San Francisco",
    },
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
