import React from "react";
import { useSelector } from "react-redux";

const counterSelector = state => state.counter;

const CounterView = props => {
  // useSelector で store の state が取得できます。
  const counter = useSelector(counterSelector);

  return (
    <>
      <p> count: {counter} </p>
      <p>props value: {props.sentData}</p>
    </>
  );
};

export default CounterView;