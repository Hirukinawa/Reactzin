function ButtonApp() {
  const handleClick = () => {
    alert("Satoru Gojo morreu");
  };

  return (
    <>
      <button onClick={handleClick}>Clique aqui para um spoiler</button>
    </>
  );
}

export default ButtonApp;
