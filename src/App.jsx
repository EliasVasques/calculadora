import React, { useState } from "react";

import Button from "./components/Button";
import Visor from "./components/Visor";

import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [lastInput, setLastInput] = useState("");


  const handleClickNumber = (valor) => {
    setInput(input + valor);
    setLastInput(valor);
  };

  const handleClickOperator = (valor) => {
    if(lastInput != '+' && lastInput != '-' && lastInput != '*' && lastInput != '/') { // não repetir operadores
      setInput(input + valor);
      setLastInput(valor);
    }
  };

  const handleClickDel = () => {

    setInput(input.toString().slice(0, input.length - 1));
  };

  const handleClickCe = () => {
    setInput("");
  };

  const handleClickEqual = () => {
    setInput(eval(input));
  };

  return (
    <div className="container-calculadora">
      <div className="row">
        <Visor valor={input}></Visor>
      </div>

      <div className="row">
        <Button onClick={handleClickCe} className={"double-width-button"}>CE</Button>
        <Button onClick={handleClickDel}>DEL</Button>
        <Button onClick={handleClickOperator} className={"operator"}>+</Button>
      </div>
      <div className="row">
        <Button onClick={handleClickNumber}>1</Button>
        <Button onClick={handleClickNumber}>2</Button>
        <Button onClick={handleClickNumber}>3</Button>
        <Button onClick={handleClickOperator} className={"operator"}>-</Button>
      </div>
      <div className="row">
        <Button onClick={handleClickNumber}>4</Button>
        <Button onClick={handleClickNumber}>5</Button>
        <Button onClick={handleClickNumber}>6</Button>
        <Button onClick={handleClickOperator} className={"operator"}>*</Button>
      </div>
      <div className="row">
        <Button onClick={handleClickNumber}>7</Button>
        <Button onClick={handleClickNumber}>8</Button>
        <Button onClick={handleClickNumber}>9</Button>
        <Button onClick={handleClickOperator} className={"operator"}>/</Button>
      </div>
      <div className="row">
        <Button onClick={handleClickNumber} className={"double-width-button"}>0</Button>
        <Button onClick={handleClickEqual} className={"double-width-button equal"}>=</Button>
      </div>
    </div>
  );
};

export default App;
