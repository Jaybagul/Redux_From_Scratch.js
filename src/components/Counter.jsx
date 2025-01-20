import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from '../redux/action/CounterAction';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch(); //action ko trigger karta hain  

  return (
    <div className="counter">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
