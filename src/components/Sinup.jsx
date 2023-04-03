import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sinup({
  sinupHandler,email,password,name,  setemail,setpassword, setname,
}) {
  return (
    <div className="sinup">
      <div className="sinup_container">
        <div className="loginpage">
          <h1>Sinup</h1>
          <Link to="/login" className="headLogin">
            Log-In
          </Link>
        </div>

        <label htmlFor="">Name :</label>
        <input
          className="sinupInp"
          type="text"
          name="name"
          placeholder="Enter your name.."
          onChange={(e) => setname(e.target.value)}
          value={name}
        />
        <label htmlFor="">Email :</label>
        <input
          className="sinupInp"
          type="email"
          placeholder="Enter your Email..."
          onChange={(e) => setemail(e.target.value)}
          value={email}
        />
        <label htmlFor="">Password :</label>
        <input
          className="sinupInp"
          type="password"
          placeholder="Enter your Password..."
          onChange={(e) => setpassword(e.target.value)}
          value={password}
        />
        <button className="sinupbtn" onClick={sinupHandler}>
          Sinup
        </button>
      </div>
    </div>
  );
}

export default Sinup;
