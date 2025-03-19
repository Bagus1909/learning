import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import userData from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userData: userData,
  },
});
