import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

function Sinup({ loginHandler, email, password, setemail, setpassword }) {
  
  return (
    <div className="login">
      <div className="login_container">
        <div className="sinuppage">
          <h1>Login</h1>
          <Link to="/" className="sinuphead">
            Sin-up
          </Link>
        </div>
        <h1 className="head"></h1>

        <label htmlFor="">Email :</label>
        <input
          className="loginInp"
          type="email"
          placeholder="Enter your Email..."
          onChange={(e) => setemail(e.target.value)}
          value={email}
        />
        <label htmlFor="">Password :</label>
        <input
          className="loginInp"
          type="password"
          placeholder="Enter your Password..."
          onChange={(e) => setpassword(e.target.value)}
          value={password}
        />
        <Link className="forgetPassword" to="/forgetpassword">
          Forget password?
        </Link>

        <button className="loginbtn" onClick={loginHandler}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Sinup;
