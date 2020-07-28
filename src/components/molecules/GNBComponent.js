import React from "react";

import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const navInfo = [
    { link: "/", menu: "HOME" },
    { link: "/room/list", menu: "숙소검색" },
];

const GNBComponent = () => {
    return (
        <Nav class="collapse navbar-collapse">
            {navInfo.map(({ link, menu }) => (
                <Link key={link} to={link} style={{ marginRight: "50px" }}>
                    {menu}
                </Link>
            ))}
        </Nav>
    );
};

export default GNBComponent;
