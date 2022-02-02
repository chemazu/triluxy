import React from "react";
import Button from "../Button";
import Logo from "../Logo/Logo";
import menu from "../../imgs/menu-icon.svg";
import close from "../../imgs/close.svg";

import "./Header.scss";

export default function Header() {
  const [showResults, setShowResults] = React.useState(false);
  const openMenu = () => {
    setShowResults(true);
  };
  const closeMenu = () => {
    setShowResults(false);
  };
  return (
    <div className="header">
      <div className="nav">
        <Logo />
        <div className="menu-items">
          <p>Stays</p>
          <p>Flights</p>
          <p>Car Rentals</p>
          <p>Restaurant</p>
        </div>
        <div className="auth">
          <Button title="Login" />
          <Button title="Register" />
        </div>
      </div>
      <div className="mob-nav-wrapper">
        <div className="mob-nav">
          <Logo />
          <img className="close" src={menu} onClick={openMenu} />
        </div>
        {showResults ? (
          <div className="mob-nav-drop">
            <div className="hidden-mob-nav">
              <Logo />
              <img className="close" src={close} onClick={closeMenu} />
            </div>
            <div className="hidden-menu-items">
              <p>Stays</p>
              <p>Flights</p>
              <p>Car Rentals</p>
              <p>Restaurant</p>
            </div>
            <div className="auth">
              <Button title="Login" />
              <Button title="Register" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
