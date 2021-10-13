import React from "react";
import "./Box.css";

const Box = ({ bgColor }) => {
  return <div className="box" style={{ backgroundColor: bgColor }}></div>;
};

export default Box;
