import React from "react";
import '../hojas de estilo/boton.css'


function Boton(props){ //Esta función flecha me devuelve si el valor pasado como parámetro, es un operador o un número.
    const esOperador = valor => {
      return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }



    return (
      <div
      //Esta línea coloca la clase css al componente, el operador ternario ? evalúa la función Boton de la línea 5. El método .trimEnd es para quitar los espacios al final.
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} 
        onClick={() => props.manejarClic(props.children)}>
        {props.children}
      </div>
    );


}

export default Boton;