import React, { useState } from "react";

const CounterPage = () => {
    const [number, setNumber] = useState(0);

    const plusFunc = () => {
        setNumber(number + 1);
    };
    const minusFunc = () => {
        setNumber(number - 1);
    };
    return (
        <div>
            {number}
            <button onClick={plusFunc}>+</button>
            <button onClick={minusFunc}>-</button>
        </div>
    );
};

export default CounterPage;
