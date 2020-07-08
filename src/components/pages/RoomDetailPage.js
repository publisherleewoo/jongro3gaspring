import React from "react";
import { useParams } from "react-router-dom";
import HeaderComponent from "../organisms/HeaderComponent";
import FooterComponent from "../organisms/FooterComponent";

const RoomDetail = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <HeaderComponent />
            숙소정보{id}
            <FooterComponent />
        </div>
    );
};

export default RoomDetail;
