import React from 'react';
import './style.scss'

export default function Button(props) {
  const {title , onClick}= props
  return <div>
      {/* <button onClick={onClick}>{title}</button> */}
      <button {...props}>{title}</button>

  </div>;
}
