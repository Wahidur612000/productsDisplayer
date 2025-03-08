import React, { useReducer } from "react";
import { counterReducer, INCREMENT,DECREMENT,INCREMENTBY2, RESET } from "./reducer/CounterReducer";

const Counter = () => {
    const [state,dispatch] = useReducer(counterReducer,{count:0});

    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={()=> dispatch({type: INCREMENT})}>Increase</button>
            <button onClick={()=> dispatch({type: INCREMENTBY2})}>Increase by 2</button>
            <button onClick={()=> dispatch({type: DECREMENT})}>Decrease</button>
            <button onClick={()=> dispatch({type: RESET})}>Reset</button>
        </div>
    );
}

export default Counter;