import React from "react";
import { useSelector } from "react-redux";

export const ComponentC = () => {
  const skills = useSelector((state) => state.skills.totalSkills);
  console.log(skills, "skills");

  return (
    <div className="w-full m-auto componentC">
      {skills.length > 0 ? <h1 className="skillsheading">My Skills</h1> : null}
      <div className="flex flexdiv justify-around">
        <div className="w-4/10 ">
          {skills.length > 0 ? (
            <img
              src="./developerskills.gif"
              alt=""
              className="w-56 h-56 mt-8"
            />
          ) : (
            <img src="./developerskills.gif" alt="" className="w-64 h-64  " />
          )}
          {skills.length >= 7 ? (
           <div>
             <img
              src="./technical.gif"
              alt=""
              className="w-56 h-56 mt-8"
              />
           </div>

          ) : null}
  
        </div>
        
        <div className="-ml-14 w-5/10 ">
          {skills.map((e, index) => {
            return (
              <div className="enteredskill flex justify-start">
                <p>{index + 1})</p>

                <p className="ml-2">{e}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
