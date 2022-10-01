import React, { useEffect, useState } from "react";

const Fibonacci = () => {
  const [numeros, setNumeros] = useState(0);
  const [stringFibonacci, setStringFibonacci] = useState("");
  const onChangeNumeros = (e) => {
    setNumeros(e.target.value);
  };
  useEffect(() => {
    const createSecuence = () => {
      setStringFibonacci("");
      if (numeros > 1) {
        let numeroAnterior = 1,
          numeroAnteAnterior = 0;
        let string = numeroAnteAnterior + "-" + numeroAnterior;
        for (let i = 0; i < numeros; i++) {
          let numeroActual = numeroAnterior + numeroAnteAnterior;
          numeroAnteAnterior = numeroAnterior;
          numeroAnterior = numeroActual;
          string = string.concat("-" + numeroActual);
        }
        setStringFibonacci(string);
      }
    };
    createSecuence();
  }, [numeros]);
  return (
    <div>
      <label htmlFor={"numerosInput"}>
        Cantidad de numeros a mostrar
        <br />
        <input
          type="text"
          id="numerosInput"
          value={numeros}
          onChange={onChangeNumeros}
        />
      </label>
      <br />
      {stringFibonacci}
    </div>
  );
};

export default Fibonacci;
