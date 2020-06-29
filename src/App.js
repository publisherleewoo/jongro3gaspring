import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserJoinPage from "./pages/UserJoinPage";
import UserLoginPage from "./pages/UserLoginPage";
import UserMyPage from "./pages/UserMyPage";
import RoomHostPage from "./pages/RoomHostPage";
import RoomListPage from "./pages/RoomListPage";
import RoomDetailPage from "./pages/RoomDetailPage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact component={HomePage} />
                <Route path={"/user/join"} component={UserJoinPage} />
                <Route path={"/user/login"} component={UserLoginPage} />
                <Route path={"/user/mypage"} component={UserMyPage} />
                <Route path={"/room/host"} component={RoomHostPage} />
                <Route path={"/room/list"} component={RoomListPage} />
                <Route path={"/room/detail/:id"} component={RoomDetailPage} />
                <Route
                    path="*"
                    render={() => {
                        return <div>없는페이지</div>;
                    }}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
