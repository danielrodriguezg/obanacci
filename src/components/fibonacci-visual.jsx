import React, { useEffect, useState } from "react";

const FibonacciVisual = () => {
  const [numeros, setNumeros] = useState(2);
  const [arrFibonacci, setArrFibonacci] = useState([]);
  const [ordered, setOrdered] = useState(null);

  const onChangeNumeros = (e) => {
    setNumeros(e.target.value);
    setArrFibonacci([]);
  };

  useEffect(() => {
    const createSecuence = () => {
      if (numeros >= 4) {
        let numeroAnterior = 1,
          numeroAnteAnterior = 0;
        let list = [
          crearDiv(numeroAnteAnterior, 0),
          crearDiv(numeroAnterior, 1)
        ];

        for (let i = 2; i <= numeros; i++) {
          let numeroActual = numeroAnterior + numeroAnteAnterior;
          numeroAnteAnterior = numeroAnterior;
          numeroAnterior = numeroActual;
          list.push(crearDiv(numeroActual, i));
        }
        setArrFibonacci(list);
      }
    };
    createSecuence();
  }, [numeros]);

  useEffect(() => {
    const orderSecuence = () => {
      let newSecuence;
      let temp = [];
      for (let i = 0; i <= numeros; i++) {
        if (i !== 0 && i % 2 === 0) {
          newSecuence = divContainer(i * 10, [temp, arrFibonacci[i]]);
          temp = [newSecuence];
        } else {
          temp.push(arrFibonacci[i]);
        }
      }
      setOrdered(newSecuence);
    };
    orderSecuence();
  }, [arrFibonacci, numeros]);

  const divContainer = (idx, content) => {
    let cont = content.map((item, idx) => <div key={idx * 100}>{item}</div>);
    return (
      <div key={idx} className="div-cara" style={{ display: "flex" }}>
        {cont}
      </div>
    );
  };

  const crearDiv = (size, idx) => {
    return (
      <div
        key={idx}
        className="div-cara"
        style={{
          width: size + "em",
          height: size + "em",
          backgroundImage:
            "url(https://preview.redd.it/f4bj9zd5baa51.png?width=960&crop=smart&auto=webp&s=a51be2b13be8884cf531491fa84f23a7a4972e30)",
          backgroundSize: size + "em"
        }}
      ></div>
    );
  };

  const Validations = () => {
    if (numeros >= 4) {
      if (numeros < 15) {
        return ordered;
      }
      return <p>{numeros} Obamas son demasiados</p>;
    }
    return <p>Debe ser mayor o igual a 4 Obamas</p>;
  };

  return (
    <div>
      <h1>Obanacci</h1>
      <p>
        La proporción áurea lleva fascinando a matemáticos, pintores y
        escultores durante cientos de años. La encontramos presente en las
        matemáticas, la naturaleza, la arquitectura, la pintura y la fotografía;
        y su nombre lleva implícito belleza, equilibrio y armonía.{" "}
        <span role="img">🙈</span>
      </p>
      <label htmlFor={"numerosInput"}>
        Cantidad de Obamas a mostrar: {numeros}
        <br />
        <input
          type="range"
          id="numerosInput"
          value={numeros}
          onChange={onChangeNumeros}
          min="0"
          max="16"
          step="2"
        />
      </label>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        {<Validations/>}
      </div>
    </div>
  );
};

export default FibonacciVisual;
