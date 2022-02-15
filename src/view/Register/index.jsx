import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { useInput } from "../../hooks/input-hook";
import "./style.scss";

export default function Register() {
  const { value: name, change: changeName, reset: resetName } = useInput("");
  const { value: email, change: changeEmail, reset: resetEmail } = useInput("");

  const {
    value: password,
    change: changePassword,
    reset: resetPassword,
  } = useInput("");

  const {
    value: confirmPassword,
    change: changeConfirmPassword,
    reset: resetConfirmPassword,
  } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, confirmPassword);
    resetConfirmPassword();
    resetEmail();
    resetName();
    resetPassword();
  };

  return (
    <div className="register">
      <div className="left"><h1>The time of your life is just a click away</h1></div>
      <div className="right">
        <h1>Register</h1>
        <h3>Manage all your bookings effeciently </h3>
        <p>
          lets get you set up so you can verify your personal account and begin
          setting up your profile
        </p>

        <form onSubmit={handleSubmit}>
          <div className="auth-form-item">
            <label>Name:</label>
            <input placeholder="Enter your full name" {...changeName} />
          </div>
          <div className="auth-form-item">
            <label>Email:</label>
            <input
              placeholder="Enter your Email"
              type="email"
              {...changeEmail}
            />
          </div>
          <div className="auth-form-item">
            <label>Password:</label>
            <input
              placeholder="Create a Password"
              type="password"
              {...changePassword}
            />
          </div>
          <div className="auth-form-item">
            <label>Re-type your password:</label>
            <input
              placeholder="Re-type your password"
              type="password"
              {...changeConfirmPassword}
            />
          </div>

          <div className="agreement">
            <p> <input type="checkbox"/>i agree to the <b>terms and condition</b></p>
            <Button title="Create Account" type="submit" />
          </div>
        </form>

        <b>
          Already have an account <Link to="/login">Log In</Link>
        </b>
      </div>
    </div>
  );
}
