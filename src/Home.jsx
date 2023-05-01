import React from "react";
import { useDispatch, useSelector} from "react-redux";

function Home() {
  let value = 100;
  const dispatch = useDispatch();

  const { c } = useSelector(state => state.custom)

  const addBtn = () => {
    dispatch({
      type: "increment",
    });
  };

  const subBtn = () => {
    dispatch({
      type: "decrement",
    });
  };
  const incrementBtn25 = () => {
    dispatch({
      type: "incrementByValue",
      payload: 25,
    });
  };

  return (
    <>
      <h1>{c}</h1>
      <button onClick={incrementBtn25}>Increment By 25</button>
      <button onClick={addBtn}>Increment</button>
      <button onClick={subBtn}>Decrement</button>
    </>
  );
}

export default Home;
