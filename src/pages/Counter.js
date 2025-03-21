import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/slices/counterSlice";
import Header from "../components/Header";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState();
  const dispatch = useDispatch();

  const handleIncrementByAmount = (e) => {
    const amount = Number(incrementAmount);
    if (!isNaN(amount)) {
      dispatch(incrementByAmount(amount));
      setIncrementAmount("");
    }
  };

  return (
    <div>
      <Header />
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <div>
        <input
          placeholder='input amount'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={handleIncrementByAmount}
          disabled={!incrementAmount}
        >
          increment By Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
