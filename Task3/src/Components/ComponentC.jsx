import React from "react";
import { useSelector } from "react-redux";

export const ComponentC = () => {
  const skills = useSelector((state) => state.skills.totalSkills);
  console.log(skills, "skills");

  return (
    <div className="w-10/12 m-auto componentC">
      {skills.length > 0 ? <h1 className="skillsheading">My Skills</h1> : null}
      <div className="flex flexdiv">
      <div>
      {skills.length > 0 ?  <img src="./developerskills.gif" alt="" className="w-56 h-56 mt-8" /> :  <img src="./developerskills.gif" alt="" className="w-64 h-64  " />} 
        </div>
        <div className="ml-14">
        {skills.map((e, index) => {
        return (
          <div className="enteredskill">
            <p >
              {index + 1}) {e}
            </p>
          </div>
        );
      })}
        </div>
      </div>
      
    </div>
  );
};
