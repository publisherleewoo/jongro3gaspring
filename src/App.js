import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserJoinPage from "./pages/UserJoinPage";
import UserLoginPage from "./pages/UserLoginPage";
import UserMyPage from "./pages/UserMyPage";
import RoomHostPage from "./pages/RoomHostPage";
import RoomListPage from "./pages/RoomListPage";
import RoomDetailPage from "./pages/RoomDetailPage";
import ReactLeaflet from "./components/molecules/ReactLeaflet";
import GNBComponent from "./components/molecules/GNBComponent";

function App() {
    return (
        <BrowserRouter>
            <GNBComponent></GNBComponent>
            <Switch>
                <Route path={"/"} exact>
                    <HomePage></HomePage>
                </Route>
                <Route path={"/user/join"} component={UserJoinPage} />
                <Route path={"/user/login"} component={UserLoginPage} />
                <Route path={"/user/mypage"} component={UserMyPage} />
                <Route path={"/room/host"} component={RoomHostPage} />

                <Route path={"/room/list"} exact>
                    <RoomListPage></RoomListPage>
                </Route>
                <Route path={"/room/detail/:id?"} component={RoomDetailPage} />
                <Route path={"/test"}>
                    <ReactLeaflet
                        lat="37.5666805"
                        lng=" 126.9784147"
                    ></ReactLeaflet>
                </Route>
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
