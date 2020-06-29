import React from "react";
import { runForceGraph } from "./ForceGraphGenerator";
import styles from "./forceGraph.module.css";

export default function ForceGraph({ links, nodes }) {
  const containerRef = React.useRef(null);
  console.log("links", links);
  console.log("nodes", nodes);

  const nodeHoverTooltip = (node) => {
    let renderedInProps = "";
    node.mustReceiveProps.forEach((prop) => {
      renderedInProps =
        renderedInProps + `<li>${prop.name + ": " + prop.type}</li>`;
    });

    let renderedOutProps = "";

    Object.keys(node.componentsInside).forEach((component) => {
      console.log(component);
      let componentInsideProps = "";
      node.componentsInside[component].passedProps.forEach((element) => {
        componentInsideProps = componentInsideProps + `<li>${element}</li>`;
      });

      renderedOutProps = `<strong>${component}</strong><ul>${componentInsideProps}</ul>`;
    });
    console.log("OK");
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
  };

  React.useEffect(() => {
    runForceGraph(links, nodes, nodeHoverTooltip);
  }, [links]);

  return <svg width="960" height="600"></svg>;
}
