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
  };

  const navigator = () => {
    nav("/signup");
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="container">
      <div className="child-div">
        <h2>Login</h2>
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
              Don't have an account ?{" "}
              <span  onClick={navigator}  >
                sign up
              </span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Login;
// rafce
