import React, { useState } from "react";
import "./App.css";
import Landing from "./Components/Landing";

export default function App() {
  const [propsMatrix, setPropsMatrix] = useState([
    [null, { name: "Componente2", props: ["primeraProp"] }, null],
    [null, null, null],
    [{ name: "Componente", props: ["propDePrueba"] }, null, null],
  ]);
  const [nodes, setNodes] = useState([
    {
      name: "Componente",
      componentsInside: { Componente2: { passedProps: ["primeraProp"] } },
      mustReceiveProps: [
        { name: "name", type: "number" },
        { name: "otro", type: "func" },
      ],
      index: 0,
    },
    {
      name: "Componente2",
      componentsInside: {},
      mustReceiveProps: [
        { name: "name1", type: "number" },
        { name: "otro2", type: "func" },
      ],
      index: 1,
    },
    {
      name: "Otro",
      componentsInside: { Componente: { passedProps: ["propDePrueba"] } },
      mustReceiveProps: [
        { name: "name3", type: "number" },
        { name: "otro3", type: "func" },
      ],
      index: 2,
    },
  ]);

  return (
    <Landing
      setPropsMatrix={setPropsMatrix}
      setNodes={setNodes}
      propsMatrix={propsMatrix}
      nodes={nodes}
    ></Landing>
  );
}
