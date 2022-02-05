import React from "react";
import "./style.scss";
import Button from "../Button";
import { useInput } from "../../hooks/input-hook";

export default function Subscribe() {
  const {value:sub, change:changeSub,reset: resetSub} = useInput('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(sub, );
    resetSub()
  }

  return (
    <div className="subscribe">
      <h2>Save time, save money!</h2>
      <p>Sign up and we'll send the best deals to you</p>
      <input type="email" placeholder="Your email" {...changeSub}/>
      <Button title="Subscribe"  onClick={handleSubmit}/>

    </div>
  );
}
