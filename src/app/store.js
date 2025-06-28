import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoreducer,
});


//adding comment to check the github template in action. adding the futher test