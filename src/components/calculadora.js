import { useState } from "react";

function Calculadora() {
  var [numero, setNumero] = useState(0);
  var [showNum1, setShowNum1] = useState(0);
  var [operacao, setOperacao] = useState("");

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
  //{showNum1} {operacao} {showNum2} = {result}

  const handleClickEquals = (numero, showNum1, operacao) => {
    //setShowNum2(numero);
    const result = calcula(showNum1, numero, operacao);
    setNumero(result);
    setOperacao("");
  };

  const handleClickDelete = () => {
    if (numero >= 10) {
      setNumero(Math.trunc(numero / 10));
    } else {
      setNumero(0);
    }
  };

  return (
    <div>
      <p>{numero}</p>
      <div>
        <button onClick={handleClickDelete}>D</button>
        <button onClick={() => handleClick(0)}>0</button>
        <button onClick={() => handleClickMultiply(numero, "*")}>*</button>
        <button onClick={() => handleClickDivide(numero, "/")}>/</button>
      </div>
      <div>
        <button onClick={() => handleClick(7)}>7</button>
        <button onClick={() => handleClick(8)}>8</button>
        <button onClick={() => handleClick(9)}>9</button>
        <button onClick={() => handleClickMinus(numero, "-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleClick(4)}>4</button>
        <button onClick={() => handleClick(5)}>5</button>
        <button onClick={() => handleClick(6)}>6</button>
        <button onClick={() => handleClickPlus(numero, "+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button onClick={() => handleClickEquals(numero, showNum1, operacao)}>
          =
        </button>
      </div>
    </div>
  );
}

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

export default Calculadora;
