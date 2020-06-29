import React, { useState } from "react";
import Navbar from "./Navbar";
import Uploader from "./Uploader";

import ForceGraph from "../Graph/ForceGraph";
import data from "../forcegraph-data.json";

export default function LandingView({
  setNodes,
  setPropsMatrix,
  propsMatrix,
  nodes,
}) {
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

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="landing_content">
        <div className="landing_files">
          <Uploader
            setPropsMatrix={setPropsMatrix}
            setNodes={setNodes}
          ></Uploader>
        </div>
        <div className="landing_graph">
          <section className="Main">
            <ForceGraph
              linksData={links}
              nodesData={nodes}
              nodeHoverTooltip={nodeHoverTooltip}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
