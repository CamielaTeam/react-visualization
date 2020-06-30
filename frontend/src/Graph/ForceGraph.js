import React from "react";
import { runForceGraph } from "./ForceGraphGenerator";
import "./graphStyles.css";

export default function ForceGraph({ links, nodes }) {
  const containerRef = React.useRef(null);
  console.log("links", links);
  console.log("nodes", nodes);

  const nodeHoverTooltip = (node) => {
    let renderedInProps = "";
    node.mustReceiveProps.forEach((prop) => {
      renderedInProps =
        renderedInProps +
        `<div class="propBox">${prop.name + ": " + prop.type}</div>`;
    });

    let renderedOutProps = "";

    Object.keys(node.componentsInside).forEach((component) => {
      console.log(component);
      let componentInsideProps = "";
      if (node.componentsInside[component].passedProps) {
        node.componentsInside[component].passedProps.forEach((element) => {
          componentInsideProps =
            componentInsideProps + `<div class="propBox">${element}</div>`;
        });
      }
      renderedOutProps =
        renderedOutProps +
        `<div class="tooltip_column_subtitle"><h3>${component}</h3></div><ul>${componentInsideProps}</ul>`;
    });
    console.log("OK");
    return `<div class="tooltip_container">
    <h1>${node.name}</h1>
    <div class="tooltip_content">
    <div class="tooltip_left_column">
    <div class="tooltip_column_title"><h2>IN PROPS</h2></div>
    <ul>${renderedInProps}</ul>
    </div>
    <div class="tooltip_column">
    <div class="tooltip_column_title"><h2>OUT PROPS</h2></div>
    ${renderedOutProps}
    </div>
    </div>
    </divcontent>`;
  };

  // const nodeHoverTooltip = React.useCallback((node) => {
  //   console.log("object");
  //   return `<div>${node.name}</div>`;
  // }, []);

  React.useEffect(() => {
    runForceGraph(links, nodes, nodeHoverTooltip);
  }, [links]);

  return (
    <svg width="960" height="600">
      <defs>
        <marker
          id="arrowhead"
          viewBox="-0 -5 10 10"
          refX="13"
          refY="0"
          orient="auto"
          markerWidth="13"
          markerHeight="13"
          xoverflow="visible"
        >
          <path
            d="M 0,-5 L 10 ,0 L 0,5"
            fill="darkturquoise"
            stroke="none"
          ></path>
        </marker>
        <linearGradient id="svgGradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop
            class="start"
            offset="50%"
            stop-color="white"
            stop-opacity="1"
          ></stop>
          <stop
            class="end"
            offset="100%"
            stop-color="#1FFFBB"
            stop-opacity="1"
          ></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
