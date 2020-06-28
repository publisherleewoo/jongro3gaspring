import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { plusAction, minusAction } from "../reducer";

const CounterPage = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const plusFunc = () => {
        dispatch(plusAction());
    };
    const minusFunc = () => {
        dispatch(minusAction());
    };
    return (
        <div>
            {state}
            <button onClick={plusFunc}>+</button>
            <button onClick={minusFunc}>-</button>
        </div>
    );
};

export default CounterPage;
