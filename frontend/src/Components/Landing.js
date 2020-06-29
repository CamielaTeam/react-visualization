import React, { useState } from "react";
import Navbar from "./Navbar";
import Uploader from "./Uploader";

import ForceGraph from "../Graph/ForceGraph";
import data from "../forcegraph-data.json";

export default function LandingView({
  setNodes,
  setPropsMatrix,
  links,
  nodes,
}) {
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
          <ForceGraph links={links} nodes={nodes} />
        </div>
      </div>
    </div>
  );
}
