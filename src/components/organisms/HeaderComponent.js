import React from "react";
import GNBComponent from "../molecules/GNBComponent";
import UNBComponent from "../molecules/UNBComponent";

const HeaderComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <h1 class="navbar-brand">Header</h1>
            <GNBComponent />
            <UNBComponent />

            <hr />
        </div>
        </nav>
    );
};

export default HeaderComponent;

