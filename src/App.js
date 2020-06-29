import React, { useState } from "react";
import "./App.css";
import Landing from "./Components/Landing";
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
    console.log("node", node);
    let renderedInProps = "";
    node.mustReceiveProps.forEach((prop) => {
      console.log(prop);
      renderedInProps =
        renderedInProps + `<li>${prop.name + ": " + prop.type}</li>`;
    });

    let renderedOutProps = "";
    Object.keys(node.componentsInside).forEach((component) => {
      let componentInsideProps = "";
      node.componentsInside[component].passedProps.forEach((element) => {
        componentInsideProps = componentInsideProps + `<li>${element}</li>`;
      });

      renderedOutProps = `<strong>${component}</strong><ul>${componentInsideProps}</ul>`;
    });
    return `<div class="tooltip_container">
    <h1>${node.name}</h1>
    <div class="tooltip_content">
    <div class="tooltip_row_left">
    <strong>IN</strong>
    <ul>${renderedInProps}</ul>
    </div>
    <div class="tooltip_row">
    <strong>OUT</strong>
    ${renderedOutProps}
    </div>
    </div>
    </divcontent>`;
  }, []);

  return (
    <div className="App">
      <Landing></Landing>
      {/* <section className="Main">
        <ForceGraph
          linksData={links}
          nodesData={nodes}
          nodeHoverTooltip={nodeHoverTooltip}
        />
      </section> */}
    </div>
  );
}
