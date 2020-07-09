import React from "react";
import GNBComponent from "../molecules/GNBComponent";
import UNBComponent from "../molecules/UNBComponent";

const HeaderComponent = () => {
    return (
        <>
            <h1>Header</h1>
            <UNBComponent />
            <GNBComponent />

            <hr />
        </>
    );
};

export default HeaderComponent;
