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
            <ForceGraph linksData={links} nodesData={nodes} />
          </section>
        </div>
      </div>
    </div>
  );
}
