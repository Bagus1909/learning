import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const storedValue = localStorage.getItem("count");
  return storedValue ? JSON.parse(storedValue) : 0;
};

const initialState = {
  value: getInitialState(),
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      localStorage.setItem("count", JSON.stringify(state.value));
    },
    decrement: (state) => {
      state.value -= 1;
      localStorage.setItem("count", JSON.stringify(state.value));
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      localStorage.setItem("count", JSON.stringify(state.value));
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
