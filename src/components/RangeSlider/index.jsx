import React from 'react';
import "./style.scss";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function RangeSlider() {
  return <div className='range-slider'>
    a
    <Slider />
    <Range />
    b
  </div>;
}
