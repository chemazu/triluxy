import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { useInput } from "../../hooks/input-hook";
import "./style.scss";

export default function Login() {
  const { value: email, change: changeEmail, reset: resetEmail } = useInput("");

  const {
    value: password,
    change: changePassword,
    reset: resetPassword,
  } = useInput("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( email, password );
    resetEmail();
    resetPassword();
  };

  return (
    <div className="login">
      <div className="left"><h1>Welcome Back</h1></div>
      <div className="right">
        <h1>Login</h1>
        <h3>Login to your account</h3>
      

        <form onSubmit={handleSubmit}>

          <div className="auth-form-item">
            <label>Email:</label>
            <input
              placeholder="Enter your e-mail"
              type="email"
              {...changeEmail}
            />
          </div>

          <div className="auth-form-item">
            <label>Re-type your password:</label>
            <input
              placeholder="Enter your password"
              type="password"
              {...changePassword}
            />
          </div>

            <Button title="Login" type="submit" />
        </form>

        <b>
        Dont have an account <Link to="/register">Register</Link>
        </b>
      </div>
    </div>
  );
}
