import React, { useState } from "react";
import Navbar from "./Navbar";
import Uploader from "./Uploader";
export default function LandingView() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="landing_content">
        <div className="landing_files">
          <Uploader></Uploader>
        </div>
        <div className="landing_graph">graph</div>
      </div>
    </div>
  );
}
