import React from "react";
import { useParams } from "react-router-dom";
import HeaderComponent from "../organisms/HeaderComponent";
import FooterComponent from "../organisms/FooterComponent";
import ReactLeaflet from "../molecules/ReactLeaflet";

const RoomDetail = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <HeaderComponent />
            <h1>RoomDetail</h1> params: {id} 번째방 <br />
            params로 데이터 불러오기.
            <ReactLeaflet lat="37.5666805" lng=" 126.9784147"></ReactLeaflet>
            <FooterComponent />
        </div>
    );
};

export default RoomDetail;
