import React, { useState } from "react";
import "../screens/style/Calculatorscreen.scss";

const Calculator = () => {
  const [screen, setScreen] = useState("");

  const appendToDisplay = (value) => {
    setScreen((prev) => prev + value);
  };

  const clearDisplay = () => {
    setScreen("");
  };

  const calculate = () => {
    try {
      setScreen(eval(screen).toString());
    } catch (error) {
      setScreen("Error");
    }
  };

  return (
    <body>
      <div className="calculator">
        <input type="text" id="display" value={screen} readOnly />
        <div className="key">
          <div>
            <button onClick={clearDisplay}>C</button>
            <button onClick={() => appendToDisplay("1")}>1</button>
            <button onClick={() => appendToDisplay("/")}>/</button>

            <button onClick={() => appendToDisplay("*")}>x</button>
          </div>

          <div>
            <button onClick={() => appendToDisplay("2")}>2</button>
            <button onClick={() => appendToDisplay("3")}>3</button>
            <button onClick={() => appendToDisplay("4")}>4</button>
            <button onClick={() => appendToDisplay("-")}>-</button>
          </div>
          <div>
            <button onClick={() => appendToDisplay("5")}>5</button>
            <button onClick={() => appendToDisplay("6")}>6</button>
            <button onClick={() => appendToDisplay("7")}>7</button>
            <button onClick={() => appendToDisplay("+")}>+</button>
          </div>
          <div className="lastbutton">
            <button onClick={() => appendToDisplay("8")}>8</button>
            <button onClick={() => appendToDisplay("9")}>9</button>
            <button onClick={() => appendToDisplay("0")}>0</button>
            <button onClick={calculate}>=</button>
            <button onClick={() => appendToDisplay(".")}>.</button>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Calculator;
