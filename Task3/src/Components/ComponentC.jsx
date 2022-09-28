import React from "react";
import { useSelector } from "react-redux";

export const ComponentC = () => {
  const skills = useSelector((state) => state.skills.totalSkills);
  console.log(skills, "skills");

  return (
    <div>
      {skills.length > 0 ? <h1>My Skills</h1> : null}
      {skills.map((e, index) => {
        return (
          <div>
            <p>
              {index + 1}) {e}
            </p>
          </div>
        );
      })}
    </div>
  );
};
