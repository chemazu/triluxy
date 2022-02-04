import React from "react";
import "./style.scss";
import info from "../../imgs/info.svg";

export default function Advert() {
  return (
    <div className="advert">
      <div className="advertborder">
        <img src={info} />
        <span>
          Get the advice you need. Check the latest COVID-19 restrictions before
          you travel
        </span>
      </div>
    </div>
  );
}
