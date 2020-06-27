import React, { useState } from "react";
import "./App.css";
// import Landing from "./Graph/Landing";
import ForceGraph from "./Graph/ForceGraph";
import data from "./forcegraph-data.json";

export default function App() {
  const propsMatrix = [
    [null, { name: "Componente2", props: ["primeraProp"] }, null],
    [null, null, null],
    [{ name: "Componente", props: ["propDePrueba"] }, null, null],
  ];
  const nodes = [
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
  ];
  const transformMatrixToLink = (matrix, nodes) => {
    const links = [];

    for (var i = 0; i < matrix.length; i++) {
      for (var z = 0; z < matrix.length; z++) {
        if (matrix[i][z]) {
          links.push({ source: nodes[i].name, target: nodes[z].name });
        }
      }
    }
    return links;
  };
  const [links, setLinks] = useState(transformMatrixToLink(propsMatrix, nodes));

  const nodeHoverTooltip = React.useCallback((node) => {
    return `<div>${node.name}</div>`;
  }, []);

  return (
    <div className="App">
      <section className="Main">
        <ForceGraph
          linksData={links}
          nodesData={nodes}
          nodeHoverTooltip={nodeHoverTooltip}
        />
      </section>
    </div>
  );
}
