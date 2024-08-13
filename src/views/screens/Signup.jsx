import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style/Signupscreen.scss";

const SignupScreen = () => {
  const [signupdata, setsignupdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  const nav = useNavigate();

  const loginNavigator = () => {
    nav("/login");
  };
  const dataHandler = (a) => {
    setsignupdata({
      ...signupdata,
      [a.target.name]: a.target.value,
    });
  };
  const dataFetcher = () => {
    console.log(signupdata);
  };
  const home_navigator = ()=>{
    nav("/Home");
  };


  return (
    <div className="container">
      <div className="child-div">
        <h6>
          <button className="homebtn"
          onClick={home_navigator}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#fff"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
          </button>
          Sign up
        </h6>
        <div>
          <input
            type="text"
            name="username"
            onChange={dataHandler}
            placeholder="username"
          />

          <input
            type="email"
            name="email"
            onChange={dataHandler}
            placeholder="email"
          />

          <input
            type="password"
            onChange={dataHandler}
            name="password"
            placeholder="set password"
          />
        </div>

        <button onClick={dataFetcher}>Signup</button>
        <p>
          Already a user?{" "}
          <span style={{ cursor: "pointer" }} onClick={loginNavigator}>
            Login
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignupScreen;
