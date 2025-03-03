
import React from "react";
import './../styles/App.css';
import { useSelector, useDispatch } from "react-redux";
import { decrement,increment } from "../Redux/counterSlice";

export function App(){
  const count=useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>{count}</h1>
        <button name="increment" onClick={()=>dispatch(increment())}>Increment</button>
        <button name="decrement" onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App
