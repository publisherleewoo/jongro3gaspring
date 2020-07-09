import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import UserJoinPage from "./components/pages/UserJoinPage";
import UserLoginPage from "./components/pages/UserLoginPage";
import UserMyPage from "./components/pages/UserMyPage";
import RoomHostPage from "./components/pages/RoomHostPage";
import RoomListPage from "./components/pages/RoomListPage";
import RoomDetailPage from "./components/pages/RoomDetailPage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact component={HomePage} />
                <Route path={"/user/join"} component={UserJoinPage} />
                <Route path={"/user/login"} component={UserLoginPage} />
                <Route path={"/user/mypage"} component={UserMyPage} />
                <Route path={"/room/host"} component={RoomHostPage} />
                <Route path={"/room/list"} component={RoomListPage}></Route>
                <Route path={"/room/detail/:id?"} component={RoomDetailPage} />

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
