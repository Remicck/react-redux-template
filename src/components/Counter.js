import React from "react";
import { useDispatch /*, useSelector */ } from "react-redux";
import { incrementAction, decrementAction } from "../action/Actions";

// const counterSelector = state => state.counter;

const Counter = props => {
  // useDispatch で store に紐付いた dispatch が取得できます。
  const dispatch = useDispatch();

  // useSelector で store の state が取得できます。
  // const counter = useSelector(counterSelector);

  return (
    <>
      <button onClick={() => dispatch(incrementAction())}>increment</button>
      <button onClick={() => dispatch(decrementAction())}>decrement</button>
    </>
  );
};

export default Counter;