import React, { useEffect, useState } from "react";
import {} from "./style/Tictoctiescreen.scss";

const Tictoctie = () => {
  const [count, setcount] = useState(0);
  const [UserClickValueiner, setUserClickValueiner] = useState({
    btnOne: "",
    btnTwo: "",
    btnThree: "",
    btnFour: "",
    btnFive: "",
    btnSix: "",
    btnSeven: "",
    btnEight: "",
    btnNine: "",
  });
  const [UserClickValue, setUserClickValue] = useState({
    btnOne: "1",
    btnTwo: "2",
    btnThree: "3",
    btnFour: "4",
    btnFive: "5",
    btnSix: "6",
    btnSeven: "7",
    btnEight: "8",
    btnNine: "9",
  });
  const [isDisabled, setIsDisabled] = useState({
    btnOne: false,
    btnTwo: false,
    btnThree: false,
    btnFour: false,
    btnFive: false,
    btnSix: false,
    btnSeven: false,
    btnEight: false,
    btnNine: false,
  });
  const [Turn, setTurn] = useState("");

  useEffect(() => {

    if (0 == count % 2) {
      setTurn("X");
    } else {
      setTurn("O");
    }
  }, [count]);

  const valueUpdator = (a) => {
    setcount(count + 1);
    setIsDisabled({
      ...isDisabled,
      [a.target.name]: true,
    });

    setUserClickValueiner({
      ...UserClickValueiner,
      [a.target.name]: Turn,
      
    });
    setUserClickValue({
      ...UserClickValue,
      [a.target.name]:Turn,

    })
    
  };
  useEffect(() => {
    WinnerChecker();
  }, [UserClickValue]);

  const WinnerChecker = () => {
    if (
      (UserClickValue.btnOne == UserClickValue.btnTwo &&
        UserClickValue.btnTwo == UserClickValue.btnThree) ||
      (UserClickValue.btnFour == UserClickValue.btnFive &&
        UserClickValue.btnFive == UserClickValue.btnSix) ||
      (UserClickValue.btnSeven == UserClickValue.btnEight &&
        UserClickValue.btnEight == UserClickValue.btnNine) ||
      (UserClickValue.btnOne == UserClickValue.btnFour &&
        UserClickValue.btnFour == UserClickValue.btnSeven) ||
      (UserClickValue.btnTwo == UserClickValue.btnFive &&
        UserClickValue.btnFive == UserClickValue.btnEight) ||
      (UserClickValue.btnThree == UserClickValue.btnSix &&
        UserClickValue.btnSix == UserClickValue.btnNine) ||
        (UserClickValue.btnOne == UserClickValue.btnFive &&
          UserClickValue.btnFive == UserClickValue.btnNine) ||
          (UserClickValue.btnThree == UserClickValue.btnFive &&
            UserClickValue.btnFive == UserClickValue.btnSeven)

    ) {
      alert(`${Turn} won This game `)
      restart_game();
    }
    else if (UserClickValue.btnOne !== "1" && 
      UserClickValue.btnTwo !==  "2" && 
      UserClickValue.btnThree !==  "3" && 
      UserClickValue.btnFour !==  "4" &&  
      UserClickValue.btnFive !==  "5" && 
      UserClickValue.btnSix !==  "6" && 
      UserClickValue.btnSeven !==  "7" && 
      UserClickValue.btnEight !==  "8" && 
      UserClickValue.btnNine !==  "9" ) {
        alert("DRAW");
        restart_game();
      
    }
  };
  const restart_game = ()=>{
    setUserClickValue({
      ...UserClickValue,
      btnOne: "1",
    btnTwo: "2",
    btnThree: "3",
    btnFour: "4",
    btnFive: "5",
    btnSix: "6",
    btnSeven: "7",
    btnEight: "8",
    btnNine: "9",

    });
    setUserClickValueiner({
      ...UserClickValueiner,
      btnOne: "",
      btnTwo: "",
      btnThree: "",
      btnFour: "",
      btnFive: "",
      btnSix: "",
      btnSeven: "",
      btnEight: "",
      btnNine: "",
      
    });
    setIsDisabled({
      ...isDisabled,
      btnOne: false,
    btnTwo: false,
    btnThree: false,
    btnFour: false,
    btnFive: false,
    btnSix: false,
    btnSeven: false,
    btnEight: false,
    btnNine: false,
    });
  }

  return (
    <>
      <div className="screen" >
        <div className="container">
          <div>
            <button
              className="btn1  btn"
              disabled={isDisabled.btnOne}
              name="btnOne"
              onClick={valueUpdator}
            >
              {UserClickValueiner.btnOne}
            </button>
            <button
              className="btn2  btn"
              disabled={isDisabled.btnTwo}
              name="btnTwo"
              onClick={valueUpdator}
            >
              {UserClickValueiner.btnTwo}
            </button>
            <button
              className="btn3  btn"
              disabled={isDisabled.btnThree}
              name="btnThree"
              onClick={valueUpdator}
            >
              {UserClickValueiner.btnThree}
            </button>
          </div>
          <div>
            <button
              className="btn4  btn"
              disabled={isDisabled.btnFour}
              name="btnFour"
              onClick={valueUpdator}
            >
              {UserClickValueiner.btnFour}
            </button>
            <button
              className="btn5  btn"
              disabled={isDisabled.btnFive}
              name="btnFive"
              onClick={valueUpdator}
            >
              {UserClickValueiner.btnFive}
            </button>
            <button
              className="btn6  btn"
              disabled={isDisabled.btnSix}
              name="btnSix"
              onClick={valueUpdator}
            >
              {UserClickValueiner.btnSix}
            </button>
          </div>
          <div>
            <button
              className="btn7  btn"
              disabled={isDisabled.btnSeven}
              name="btnSeven"
              onClick={valueUpdator}
            >
              {UserClickValueiner.btnSeven}
            </button>
            <button
              className="btn8  btn"
              disabled={isDisabled.btnEight}
              name="btnEight"
              onClick={valueUpdator}
            >
              {UserClickValueiner.btnEight}
            </button>
            <button
              className="btn9  btn"
              disabled={isDisabled.btnNine}
              name="btnNine"
              onClick={valueUpdator}
            >
              {UserClickValueiner.btnNine}
            </button>
          </div>
        </div>
        <button onClick={restart_game}>RESTART</button>
      </div>
    </>
  );
};

export default Tictoctie;
