import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Skills.js";
export default configureStore({
  reducer: {
    skills: counterReducer,
  },
});
