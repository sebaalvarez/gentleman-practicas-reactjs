import "./App.css";
import { useState } from "react";
import { Button } from "./components";
import { useFetch } from "./hooks";

// const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const url = "https://rickandmortyapi.com/api/character";

function App() {
  const [count, setCount] = useState(0);

  const { data, loading, error } = useFetch(url);

  const fnClick = () => {
    setCount((count) => count + 1);
  };

  let valor = "";

  if (loading) {
    valor = "CARGANDO...";
  } else if (error) {
    valor = error;
  } else {
    valor = JSON.stringify(data);
  }

  return (
    <>
      <div>
        <h1>Practicas ReactJS</h1>
      </div>
      <div className="card">
        <Button label={`Cantidad: ${count}`} funcionClick={fnClick} />
      </div>
      <div> {valor}</div>
    </>
  );
}

export default App;
