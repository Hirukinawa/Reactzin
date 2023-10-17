import { useState } from "react";
import "../App.css";

function Calculadora() {
  var [numero, setNumero] = useState(0);
  var [showNum1, setShowNum1] = useState(0);
  var [showNum2, setShowNum2] = useState(0);
  var [operacao, setOperacao] = useState("");
  var [resultado, setResultado] = useState(0);
  //var resultado = 0;

  const handleClick = (parNumero) => {
    if (numero === 0) {
      setNumero(parNumero);
    } else if (numero > 0) {
      setNumero(numero * 10 + parNumero);
    }
  };

  const handleClickPlus = (numero, operacao) => {
    setShowNum1(numero);
    setOperacao(operacao);
    setNumero(0);
  };

  const handleClickMinus = (numero, operacao) => {
    setShowNum1(numero);
    setOperacao(operacao);
    setNumero(0);
  };

  const handleClickMultiply = (numero, operacao) => {
    setShowNum1(numero);
    setOperacao(operacao);
    setNumero(0);
  };

  const handleClickDivide = (numero, operacao) => {
    setShowNum1(numero);
    setOperacao(operacao);
    setNumero(0);
  };
  //{showNum1} {operacao} {numero} = {resultado} / {showNum2}

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
    setResultado(0);
    setOperacao("");
  };

  const handleClickEquals = (numero, showNum1, operacao) => {
    let result;
    if (resultado !== 0) {
      const num2 = showNum2;
      result = calcula(resultado, num2, operacao);
      setResultado(result);
    } else {
      result = calcula(showNum1, numero, operacao);
      setResultado(result);
      setShowNum2(numero);
    }
    setNumero(result);
  };

  function calcula(num1, num2, operacao) {
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
              onClick={() => handleClickDivide(numero, "/")}
            >
              /
            </button>
            <button
              className="botao"
              onClick={() => handleClickMultiply(numero, "*")}
            >
              X
            </button>
            <button className="botao" onClick={() => handleClickDelete}>
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
              onClick={() => handleClickMultiply(numero, "*")}
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
              onClick={() => handleClickMinus(numero, "-")}
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
              onClick={() => handleClickPlus(numero, "+")}
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
      <p>
        {showNum1} {operacao} {numero} = {resultado} / {showNum2}
      </p>
    </div>
  );
}

export default Calculadora;
