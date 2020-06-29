import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { plusAction } from "../reducer/test";

const HomePage = () => {
    const reduxState = useSelector((state) => state.testReducer);
    const dispatch = useDispatch();
    console.log(reduxState);
    useEffect(() => {
        dispatch(plusAction());
    }, [dispatch]);
    return <div>홈{reduxState}</div>;
};

export default HomePage;
