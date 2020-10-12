import React from "react";
import { ReactComponent as Node } from "./nodelogo.svg";
import "./nodeLogo.css";

function NodeLogo({ className }) {
  return (
    <div className={className + " node-wrapper"}>
      <Node className="node-logo" />
    </div>
  );
}

export default NodeLogo;
