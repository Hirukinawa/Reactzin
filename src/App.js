import "./App.css";
import ButtonApp from "./components/button";
import Calculadora from "./components/calculadora";
import Molde from "./components/molde";
import Teste from "./components/teste";

function App() {
  return (
    <div className="App">
      <Teste numero={51} />
      <ButtonApp />
      <Calculadora />
      <div className="volumes">
        <Molde />
      </div>
    </div>
  );
}

export default App;
