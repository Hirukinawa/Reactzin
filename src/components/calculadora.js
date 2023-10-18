import { useState } from "react";
import "../App.css";
import CalcButton from "./calcButton";
import CalcButtonDuplo from "./calcButtonDuplo";

function Calculadora() {
  var [numero, setNumero] = useState(0);
  var [showNum1, setShowNum1] = useState(0);
  var [showNum2, setShowNum2] = useState(0);
  var [operacao, setOperacao] = useState("");
  var [ultima, setUltima] = useState(null);
  var [lastOp, setlastOp] = useState(null);
  var [isDecimal, setIsDecimal] = useState(false);
  console.log("renderizou");

  const handleClick = (parNumero) => {
    if (numero >= 999999999999) {
      return;
    } else if (isDecimal === true) {
      setNumero(numero.toString() + parNumero.toString());
    } else {
      if (lastOp !== null) {
        setlastOp(null);
      } else {
        if (showNum1 !== 0) {
          setNumero(numero * 10 + parNumero);
          setShowNum2(numero * 10 + parNumero);
        } else {
          setNumero(numero * 10 + parNumero);
        }
      }
    }
  };

  const handleClickSign = (parNumero, parOperacao) => {
    if (numero >= 999999999999) {
      return;
    } else {
      if (showNum2 !== 0) {
        if (lastOp === null) {
          setOperacao(parOperacao);
          setShowNum1(calcula(showNum1, showNum2, operacao));
          setNumero(0);
          setUltima(null);
          setlastOp(parOperacao);
          setIsDecimal(false);
        } else {
          return;
        }
      } else {
        setShowNum1(parNumero);
        setOperacao(parOperacao);
        setNumero(0);
        setUltima(null);
        setIsDecimal(false);
      }
    }
  };

  const handleClickVirgula = () => {
    if (isDecimal === true) {
      return;
    } else {
      setNumero(numero + ".");
      setIsDecimal(true);
    }
  };

  const handleClickDelete = () => {
    if (Number(numero) >= 10) {
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
    if (numero >= 999999999999) {
      return;
    } else {
      if (ultima === null) {
        setNumero(calcula(showNum1, numero, operacao));
        setUltima(showNum2);
      } else {
        setNumero(calcula(numero, ultima, operacao));
        setShowNum1(calcula(numero, ultima, operacao));
      }
    }
  };

  function calcula(num1, num2) {
    if (operacao === "+") {
      if (num1 + num2 >= 999999999999) {
        return "Excede o limite";
      } else {
        return num1 + num2;
      }
    } else if (operacao === "-") {
      if (num1 - num2 >= 999999999999) {
        return "Excede o limite";
      } else {
        return num1 - num2;
      }
    } else if (operacao === "*") {
      if (num1 * num2 >= 999999999999) {
        return "Excede o limite";
      } else {
        return num1 * num2;
      }
    } else if (operacao === "/") {
      if (num1 / num2 >= 999999999999) {
        return "Excede o limite";
      } else {
        return num1 / num2;
      }
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
              <CalcButton valor={"C"} onButtonClick={handleClickClear} />
              <CalcButton
                valor={"/"}
                onButtonClick={() => handleClickSign(numero, "/")}
              />
              <CalcButton
                valor={","}
                onButtonClick={() => handleClickVirgula()}
              />
              <CalcButton valor={"←"} onButtonClick={handleClickDelete} />
            </div>
            <div className="linha">
              <CalcButton valor={7} onButtonClick={() => handleClick(7)} />
              <CalcButton valor={8} onButtonClick={() => handleClick(8)} />
              <CalcButton valor={9} onButtonClick={() => handleClick(9)} />
              <CalcButton
                valor={"X"}
                onButtonClick={() => handleClickSign(numero, "*")}
              />
            </div>
            <div className="linha">
              <CalcButton valor={4} onButtonClick={() => handleClick(4)} />
              <CalcButton valor={5} onButtonClick={() => handleClick(5)} />
              <CalcButton valor={6} onButtonClick={() => handleClick(6)} />
              <CalcButton
                valor={"-"}
                onButtonClick={() => handleClickSign(numero, "-")}
              />
            </div>
            <div className="linha">
              <CalcButton valor={1} onButtonClick={() => handleClick(1)} />
              <CalcButton valor={2} onButtonClick={() => handleClick(2)} />
              <CalcButton valor={3} onButtonClick={() => handleClick(3)} />
              <CalcButton
                valor={"+"}
                onButtonClick={() => handleClickSign(numero, "+")}
              />
            </div>
            <div className="linha">
              <CalcButtonDuplo valor={0} onButtonClick={() => handleClick(0)} />
              <CalcButtonDuplo
                valor="="
                onButtonClick={() =>
                  handleClickEquals(numero, showNum1, operacao)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculadora;
