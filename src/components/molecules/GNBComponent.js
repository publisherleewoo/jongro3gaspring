import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Anchor = styled(Link)`
    border: 1px solid black;
    padding: 5px;
    margin-right: 5px;
`;
const navInfo = [
    { link: "/", menu: "index(인덱스 Layout1)" },
    { link: "/user/join", menu: "분리 회원가입" },
    { link: "/user/login", menu: "분리 로그인" },
    { link: "/user/mypage", menu: "마이페이지" },
    { link: "/room/host", menu: "호스트" },
    { link: "/room/list", menu: "리스트(Layout2)" },
    { link: "/room/detail/1", menu: "디테일(방목록) 1" },
    { link: "/test", menu: "Leaflet 서울시청 " },
];

const GNBComponent = () => {
    console.log(navInfo);
    return (
        <Container>
            <Row xs={12} md={6}>
                {navInfo.map(({ link, menu }) => (
                    <Anchor key={link} to={link}>
                        {menu}
                    </Anchor>
                ))}
            </Row>
        </Container>
    );
};

export default GNBComponent;
