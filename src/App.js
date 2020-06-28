import React from "react";
import "./App.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CounterPage from "./pages/CounterPage";

function App() {
    return (
        <BrowserRouter>
            <Link to="/">홈</Link>
            <Link to="/About">어바웃</Link>
            <Link to="/counter">카운터(이벤트연습)</Link>

            <Switch>
                <Route path={"/"} exact>
                    <HomePage></HomePage>
                </Route>
                <Route path={"/about"} exact>
                    <AboutPage></AboutPage>
                </Route>
                <Route path={"/counter"} exact>
                    <CounterPage></CounterPage>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
