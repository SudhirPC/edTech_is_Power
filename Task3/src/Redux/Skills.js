import { createSlice } from "@reduxjs/toolkit";

export const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    totalSkills: [],
  },
  reducers: {
    addSkills: (initialState, { type, payload }) => {
      // console.log("addskills", initialState, payload)
      return {
        ...initialState,
        totalSkills: [...initialState.totalSkills, payload],
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSkills } = skillsSlice.actions;

export default skillsSlice.reducer;
