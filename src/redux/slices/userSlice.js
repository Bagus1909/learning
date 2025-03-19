import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  code: false,
};

export const userData = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, { payload }) => {
      state.value = payload.value;
      state.code = payload.code;
    },
  },
});

export const { setUserData } = userData.actions;
export default userData.reducer;
