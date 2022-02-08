import React,{useState} from "react";
import "./style.scss";

export default function FilterItem() {
  const[min, setMin]= useState('')
  const[max, setMax]= useState('')

  const changeMin= (e)=>{
    console.log(e.target.value)
    setMin(e.target.value)
  }
  const changeMax= (e)=>{
    console.log(e.target.value)
    setMax(e.target.value)
  }
  return (
    <div className="filter-item">
      
      <div className="show">
      <p>title</p>
      {/* use case and switch to loop through the filter options */}
      </div>
      <div className="hidden">
          {/* <input type='search'/>
      <p>s</p> */}
      <p>{min}</p>
      <input type="range" onChange={changeMin}  min="0" max="10"/>

      <p>{max}</p>
      <input type="range" onChange={changeMax}  min="0" max="10"/>


      </div>
    </div>
  );
}
