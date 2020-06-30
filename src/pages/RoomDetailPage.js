import React from "react";
import { useParams } from "react-router-dom";

const RoomDetail = () => {
    const { id } = useParams();
    console.log(id);
    return <div>숙소정보{id}</div>;
};

export default RoomDetail;
