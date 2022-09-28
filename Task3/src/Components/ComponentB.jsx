import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSkills } from "../Redux/Skills.js";

export const ComponentB = () => {
  const [inputSkill, setInputSkill] = useState("");
  const dispatch = useDispatch();
  const handleAddSkill = () => {
    dispatch(addSkills(inputSkill));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Thoughts"
        onChange={(e) => setInputSkill(e.target.value)}
      />
      <button onClick={handleAddSkill}>Add Skills</button>
    </div>
  );
};
