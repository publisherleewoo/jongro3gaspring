import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const navInfo = [
    { link: "/room/host", menu: "호스트" },
    { link: "/user/join", menu: "회원가입" },
    { link: "/user/login", menu: "로그인" },
    { link: "/user/mypage", menu: "마이페이지" },
];

const UNBComponent = () => {
    return (
        <Nav className="justify-content-end navbar-right navbar-nav nav">
            {navInfo.map(({ link, menu }) => (
                <Link className="nav-item active" key={link} to={link} style={{ marginLeft: "10px" }}>
                    {menu}
                </Link>
            ))}
        </Nav>
    );
};

export default UNBComponent;
