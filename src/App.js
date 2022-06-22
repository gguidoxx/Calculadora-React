import './App.css';
import Boton from "./componentes/boton"
import Pantalla from "./componentes/pantalla";
import BotonClear from "./componentes/botonclear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

  const [input, setInput] = useState('6002');
  
  const nuevoValor = val => {
    setInput(input + val);
  };

  const resultado =() => {
    if(input ){
      setInput(evaluate(input));
    }
  }


  return (
    <div className="App">
    <div className="contenedor-calculadora">
      <Pantalla input={input}/>
      <div className="fila">
        <Boton manejarClic={nuevoValor}>1</Boton>
        <Boton manejarClic={nuevoValor}>2</Boton>
        <Boton manejarClic={nuevoValor}>3</Boton>
        <Boton manejarClic={nuevoValor}>+</Boton>
      </div>
      <div className="fila"> 
        <Boton manejarClic={nuevoValor}>4</Boton>
        <Boton manejarClic={nuevoValor}>5</Boton>
        <Boton manejarClic={nuevoValor}>6</Boton>
        <Boton manejarClic={nuevoValor}>-</Boton>
      </div>
      <div className="fila"> 
        <Boton manejarClic={nuevoValor}>7</Boton>
        <Boton manejarClic={nuevoValor}>8</Boton>
        <Boton manejarClic={nuevoValor}>9</Boton>
        <Boton manejarClic={nuevoValor}>*</Boton>
      </div>
      <div className="fila"> 
        <Boton manejarClic={resultado}>=</Boton>
        <Boton manejarClic={nuevoValor}>0</Boton>
        <Boton manejarClic={nuevoValor}>.</Boton>
        <Boton manejarClic={nuevoValor}>/</Boton>
      </div>
      <div className="fila">
        <BotonClear manejarClear={() => setInput('')}>
          BORRAR
        </BotonClear>
      </div>
    </div>



    </div>
  );
}

export default App;
