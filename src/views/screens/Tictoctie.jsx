import React, { useEffect, useState } from "react";
import {  } from "./style/Tictoctiescreen.scss";


const Tictoctie = () => {

   const [count, setcount] = useState(0)

   const valueUpdator =  () => {
    setcount(count+1)

   }
    useEffect(() => {
      console.log(count)
    
      
    }, [count])
    
    if (0==count%2) {
      console.log("even")
      
    } else {
      console.log("odd")
    }
    
  
  return (
    <>
      <div className="screen">
        <div className="container">
          <div>
            <button className="btn1  btn" onClick={valueUpdator}></button>
            <button className="btn2  btn" onClick={valueUpdator}></button>
            <button className="btn3  btn" onClick={valueUpdator}></button>
          </div>
          <div>
            <button className="btn4  btn" onClick={valueUpdator}></button>
            <button className="btn5  btn" onClick={valueUpdator}></button>
            <button className="btn6  btn" onClick={valueUpdator}></button>
          </div>
          <div>
            <button className="btn7  btn" onClick={valueUpdator}></button>
            <button className="btn8  btn" onClick={valueUpdator}></button>
            <button className="btn9  btn" onClick={valueUpdator}></button>
          </div>
        </div>
        <button>RESTART</button>
      </div>
    </>
  );
};

export default Tictoctie;
