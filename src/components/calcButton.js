function CalcButton({ valor, onButtonClick }) {
  return (
    <>
      <button className="botao" onClick={onButtonClick}>
        {valor}
      </button>
    </>
  );
}

export default CalcButton;
