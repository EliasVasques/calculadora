import React, { useState } from "react";

import Button from "./components/Button";
import Input from "./components/Input";

import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [lastInput, setLastInput] = useState("");


  const handleClickNumber = (valor) => {
    setInput(input + valor);
    setLastInput(valor);
  };

  const handleClickOperator = (valor) => {
    if (!isOperator(lastInput)) { // não repetir operadores
      setInput(input + ' ' + valor + ' ');
      setLastInput(valor);
    }
  };

  const handleClickDel = () => {
    // setInput(input.toString().slice(0, input.length - 1));
    const previousInput = input.split(' ');
    previousInput.pop()
    setInput(previousInput.join(' '))
  };

  const handleClickCe = () => {
    setInput("");
  };

  const isOperator = (value) => {
    if (value == '+' || value == '-' || value == '*' || value == '/') {
      return true;
    }
    return false;
  }

  const inputNumbersRemovedPreviousZero = () => { // 09 -> 9 (0 antes da erro com eval)
    const newInput = input.split(' ').map((value) => {
      return value.replace('0', '')
    }).join(' ');
    return newInput;
  }

  const handleClickEqual = () => {
    setInput(String(eval(inputNumbersRemovedPreviousZero())));
  };

  return (
    <div className="container">
      <div className="container-calculadora">
        <div className="row">
          <Input valor={input}></Input>
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
          <Button onClick={handleClickNumber}>0</Button>
          <Button onClick={handleClickNumber}>.</Button>
          <Button onClick={handleClickEqual} className={"double-width-button equal"}>=</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
