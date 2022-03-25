import React from "react";
import "./style.scss";

export default function Button(props) {
  const { title } = props;
  return (
    <div>
      {/* <button onClick={onClick}>{title}</button> */}
      <button {...props}>{title}</button>
    </div>
  );
}
