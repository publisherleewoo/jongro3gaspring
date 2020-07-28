import React from "react";
import HeaderComponent from "../organisms/HeaderComponent";
import FooterComponent from "../organisms/FooterComponent";
import { Link } from "react-router-dom";
import imagA from "../../assets/image/motel.jpg";

const roomList = [
    { link: "/room/detail/1", menu: "디테일(방목록) one" },
    { link: "/room/detail/2", menu: "디테일(방목록) two" },
];
//   { link: "/test", menu: "Leaflet 서울시청 " },
const RoomList = () => {
    return (
        <div>
            <HeaderComponent />
            <div style={style.main}>
            <h1>RoomList</h1>
            {roomList.map((room, index) => (
                <Link
                    key={room.link}
                    to={room.link}
                    style={{ marginRight: "30px" }}
                >
                    {room.menu}
                </Link>
            ))}
            </div>
            <FooterComponent />
        </div>
    );
};

export default RoomList;

const style = {
    main: {
        backgroundImage: "url("+imagA+")",
        height: '800px'
    }
}