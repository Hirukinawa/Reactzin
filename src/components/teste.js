export default function Teste({ numero }) {
  var texto;
  if (numero <= 0) {
    texto = "SR";
  } else if (numero <= 41) {
    texto = "BR";
  } else if (numero <= 51) {
    texto = "RM";
  } else {
    texto = "RA";
  }
  return (
    <>
      <p>{texto}</p>
    </>
  );
}
//=SE(B9<=0,"SR",SE(B9<=41,"BR",SE(B9<=51,"RM","RA")))
