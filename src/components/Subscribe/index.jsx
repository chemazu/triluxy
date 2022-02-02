import React from "react";
import "./style.scss";
import Button from "../Button";

export default function Subscribe() {
  return (
    <div className="subscribe">
      <h2>Save time, save money!</h2>
      <p>Sign up and we'll send the best deals to you</p>
      <input type="email" placeholder="Your email" />
      <Button title="Subscribe" />
      <input type="checkbox" value="1" /> <span>lorem ipsum consent</span>
    </div>
  );
}
