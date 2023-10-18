function CalcButtonDuplo({ valor, onButtonClick }) {
  return (
    <>
      <button className="botaoDuplo" onClick={onButtonClick}>
        {valor}
      </button>
    </>
  );
}

export default CalcButtonDuplo;
