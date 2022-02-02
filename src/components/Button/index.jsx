import React from 'react';
import './style.scss'

export default function Button(props) {
  return <div>
      <button>{props.title}</button>
  </div>;
}
