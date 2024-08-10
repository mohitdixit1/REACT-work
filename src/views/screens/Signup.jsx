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
  useEffect(() => {
    console.log(signupdata);
    
  }, [signupdata]);

  return (
    <div className="container">
      <div className="child-div">
        <h1>Sign up</h1>
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
            type="pasword"
            onChange={dataHandler}
            name="password"
            placeholder="set password"
          />
        </div>

        <button>Signup</button>
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
