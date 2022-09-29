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
    <div className="w-full m-auto componentB">
      <i>
        <h1 className=" heading text-2xl text-red-600">Skills List App</h1>
      </i>
      <div className=" flex justify-center">
        <div className="relative ">
          <input
            type="text"
            id="simple-search"
            onChange={(e) => setInputSkill(e.target.value)}
            placeholder="Enter Your Skills"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-8/10 pr-24 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-xl"
            required=""
          />
        </div>
        <button
          type="submit"
          onClick={handleAddSkill}
          className="p-2.5 ml-2 w-32 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Skills
        </button>
      </div>
    </div>
  );
};
