import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CounterContext } from "./CounterContext";

const Home = () => {
  const { state } = useContext(CounterContext);

  return (
    <div>
      <Link to="/counter">Counter</Link>
      <Link to="/mycounter">MyCounter</Link>
      <h1>Counter Value: {state.count}</h1>
      <h1>MyCounter Value: {state.myCount}</h1>
    </div>
  );
};

export default Home;
