import React from "react";
import { ComponentB } from "./ComponentB.jsx";
import { ComponentC } from "./ComponentC.jsx";

export const ComponentA = () => {
  return (
    <div>
      <ComponentB />
      <ComponentC />
    </div>
  );
};
