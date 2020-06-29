import React, { useState } from "react";
import "./App.css";
import Landing from "./Components/Landing";

export default function App() {
  const [propsMatrix, setPropsMatrix] = useState([]);
  const [nodes, setNodes] = useState([]);

  return (
    <Landing
      setPropsMatrix={setPropsMatrix}
      setNodes={setNodes}
      propsMatrix={propsMatrix}
      nodes={nodes}
    ></Landing>
  );
}
