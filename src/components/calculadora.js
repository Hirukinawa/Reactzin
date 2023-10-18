import { useState } from "react";
import "../App.css";

function Calculadora() {
  var [numero, setNumero] = useState(0);
  var [showNum1, setShowNum1] = useState(0);
  var [showNum2, setShowNum2] = useState(0);
  var [operacao, setOperacao] = useState("");
  var [ultima, setUltima] = useState(null);
  var [lastOp, setlastOp] = useState(null);
  //var resultado = 0;

  const handleClick = (parNumero) => {
    if (numero >= 999999999999) {
      return;
    } else {
      if (showNum1 !== 0) {
        setNumero(numero * 10 + parNumero);
        setShowNum2(numero * 10 + parNumero);
        setlastOp(null);
      } else {
        setNumero(numero * 10 + parNumero);
        setlastOp(null);
      }
    }
  };

  const handleClickSign = (parNumero, parOperacao) => {
    if (showNum2 !== 0) {
      if (lastOp === null) {
        setOperacao(parOperacao);
        setShowNum1(calcula(showNum1, showNum2, operacao));
        setNumero(0);
        setUltima(null);
        setlastOp(parOperacao);
      } else {
        return;
      }
    } else {
      setShowNum1(parNumero);
      setOperacao(parOperacao);
      setNumero(0);
      setUltima(null);
    }
  };

  const handleClickDelete = () => {
    if (numero >= 10) {
      setNumero(Math.trunc(numero / 10));
    } else {
      setNumero(0);
    }
  };

  const handleClickClear = () => {
    setNumero(0);
    setShowNum1(0);
    setShowNum2(0);
    setOperacao("");
    setUltima(null);
    setlastOp(null);
  };

  const handleClickEquals = () => {
    if (ultima === null) {
      setNumero(calcula(showNum1, numero, operacao));
      setUltima(showNum2);
    } else {
      setNumero(calcula(numero, ultima, operacao));
      setShowNum1(calcula(numero, ultima, operacao));
    }
  };

  function calcula(num1, num2) {
    if (operacao === "+") {
      return num1 + num2;
    } else if (operacao === "-") {
      return num1 - num2;
    } else if (operacao === "*") {
      return num1 * num2;
    } else if (operacao === "/") {
      return num1 / num2;
    } else {
      return num2;
    }
  }

  return (
    <>
      <div className="calculadora">
        <div className="placa">
          <div className="monitor">
            <p>{numero}</p>
          </div>
          <div className="teclas">
            <div className="linha">
              <button className="botao" onClick={handleClickClear}>
                C
              </button>
              <button
                className="botao"
                onClick={() => handleClickSign(numero, "/")}
              >
                /
              </button>
              <button
                className="botao"
                onClick={() => handleClickSign(numero, "*")}
              >
                X
              </button>
              <button className="botao" onClick={() => handleClickDelete()}>
                ←
              </button>
            </div>
            <div className="linha">
              <button className="botao" onClick={() => handleClick(7)}>
                7
              </button>
              <button className="botao" onClick={() => handleClick(8)}>
                8
              </button>
              <button className="botao" onClick={() => handleClick(9)}>
                9
              </button>
              <button
                className="botao"
                onClick={() => handleClickSign(numero, "*")}
              >
                X
              </button>
            </div>
            <div className="linha">
              <button className="botao" onClick={() => handleClick(4)}>
                4
              </button>
              <button className="botao" onClick={() => handleClick(5)}>
                5
              </button>
              <button className="botao" onClick={() => handleClick(6)}>
                6
              </button>
              <button
                className="botao"
                onClick={() => handleClickSign(numero, "-")}
              >
                -
              </button>
            </div>
            <div className="linha">
              <button className="botao" onClick={() => handleClick(1)}>
                1
              </button>
              <button className="botao" onClick={() => handleClick(2)}>
                2
              </button>
              <button className="botao" onClick={() => handleClick(3)}>
                3
              </button>
              <button
                className="botao"
                onClick={() => handleClickSign(numero, "+")}
              >
                +
              </button>
            </div>
            <div className="linha">
              <button className="botaoDuplo" onClick={() => handleClick(0)}>
                0
              </button>
              <button
                className="botaoDuplo"
                onClick={() => handleClickEquals(numero, showNum1, operacao)}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
      <p>showNum1: {showNum1}</p>
      <p>operação: {operacao}</p>
      <p>numero: {numero}</p>
      <p>showNum2: {showNum2}</p>
      <p>ultima: {ultima}</p>
    </>
  );
}

export default Calculadora;
