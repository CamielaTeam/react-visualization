import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Landing from "./Graph/Landing";
import Graph from "./Graph/Graph";
export default function App() {
  const propsMatrix = [
    [null, { name: "Componente2", props: ["primeraProp"] }, null],
    [
      { name: "Componente", props: ["segundaProp"] },
      null,
      { name: "Otro", props: [] },
    ],
    [{ name: "Componente", props: ["propDePrueba"] }, null, null],
  ];
  return (
    <div className="App">
      <Graph
        width="100%"
        nodes={[
          { id: 1, name: "node 1", dependsOn: [] },
          { id: 7, name: "node 7", dependsOn: [] },
          { id: 2, name: "node 2", dependsOn: [1] },
          { id: 3, name: "node 3", dependsOn: [2] },
          { id: 4, name: "node 4", dependsOn: [2] },
          { id: 5, name: "node 5", dependsOn: [4, 7] },
          { id: 6, name: "node 6", dependsOn: [5] },
        ]}
      ></Graph>
    </div>
  );
}
