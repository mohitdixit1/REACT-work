import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Dummy from "./views/components/Dummy";
import { useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  const nav = useNavigate();

  const login_navigator = () => {
    nav("/Login");
  };
  const Game_navigator = () => {
    nav("/game");
  };
  const cals_navigator = ()=>{
    nav("/calculator");
  }

  return (
    <>
      <div className="main">
        <h2>What Do You Want To Do</h2>
        <span onClick={login_navigator}>
        <button>Login</button></span>
        <span onClick={Game_navigator}>
        <button>Play Game</button>
        </span>
        <span onClick={cals_navigator}>
        <button>Calculator</button>
        </span>
      </div>
    </>
  );
}

export default App;
