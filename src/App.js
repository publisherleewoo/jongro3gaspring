import React from "react";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserJoinPage from "./pages/UserJoinPage";
import UserLoginPage from "./pages/UserLoginPage";
import UserMyPage from "./pages/UserMyPage";
import RoomHostPage from "./pages/RoomHostPage";
import RoomListPage from "./pages/RoomListPage";
import RoomDetailPage from "./pages/RoomDetailPage";
import ReactLeaflet from "./components/molecules/ReactLeaflet";
import styled from "styled-components";

const Anchor = styled(Link)`
    border: 1px solid black;
    padding: 5px;
    margin-right: 5px;
`;

function App() {
    return (
        <BrowserRouter>
            <Anchor to={"/"}>index(인덱스)</Anchor>
            <Anchor to={"/user/join"}>분리 회원가입</Anchor>
            <Anchor to={"/user/login"}>분리 로그인</Anchor>
            <Anchor to={"/user/mypage"}>마이페이지</Anchor>
            <Anchor to={"/room/host"}>호스트</Anchor>
            <Anchor to={"/room/list"}>리스트</Anchor>
            <Anchor to={"/room/detail/1"}>디테일(방목록) 1</Anchor>
            <Anchor to={"/test"}>Leaflet Err</Anchor>

            <Switch>
                <Route path={"/"} exact component={HomePage} />
                <Route path={"/user/join"} component={UserJoinPage} />
                <Route path={"/user/login"} component={UserLoginPage} />
                <Route path={"/user/mypage"} component={UserMyPage} />
                <Route path={"/room/host"} component={RoomHostPage} />
                <Route path={"/room/list"} component={RoomListPage} />
                <Route path={"/room/detail/:id?"} component={RoomDetailPage} />
                <Route path={"/test"} component={ReactLeaflet} />
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
