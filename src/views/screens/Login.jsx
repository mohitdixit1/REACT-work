import React, { useEffect, useState } from "react";
import "./style/Loginscreen.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();

  const [data, setData] = useState({
    username: "",
    pwd: "",
  });

  const dataHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const dataFetcher = () => {
    console.log(data);
    nav("/game");
  };

  const navigator = () => {
    nav("/signup");
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
          Login
        </h6>
        <div>
          {" "}
          <label htmlFor="username">Username</label>
          <input
            id="usernamne"
            type="text"
            name="username"
            placeholder="username"
            value={data.username}
            onChange={dataHandler}
          />
        </div>

        <div>
          {" "}
          <label htmlFor="pwd">Password</label>
          <input
            id="pwd"
            type="password"
            name="pwd"
            placeholder="password"
            value={data.pwd}
            onChange={dataHandler}
          />
        </div>
        <div>
          <button onClick={dataFetcher}>Login</button>
        </div>
        <div>
          <div>
            Don't have an account ? <span onClick={navigator}>sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
// rafce
