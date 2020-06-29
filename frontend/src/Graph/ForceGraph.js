import React from "react";
import { runForceGraph } from "./ForceGraphGenerator";
import styles from "./forceGraph.module.css";

export default function ForceGraph({ linksData, nodesData }) {
  const containerRef = React.useRef(null);
  console.log("linksData", linksData);
  console.log("nodesData", nodesData);

  const nodeHoverTooltip = React.useCallback((node) => {
    console.log("node", node);
    let renderedInProps = "";
    node.mustReceiveProps.forEach((prop) => {
      console.log(prop);
      renderedInProps =
        renderedInProps + `<li>${prop.name + ": " + prop.type}</li>`;
    });

    let renderedOutProps = "";
    console.log(node.componentsInside);
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
  }, []);

  React.useEffect(() => {
    runForceGraph(containerRef.current, linksData, nodesData, nodeHoverTooltip);
  }, [nodesData]);

  return <div ref={containerRef} className={styles.container} />;
}
