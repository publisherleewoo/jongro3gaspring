import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// https://react-leaflet.js.org/docs/en/examples 참고

export const pointerIcon = new L.Icon({
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    // iconAnchor: [5, 55],
    // popupAnchor: [10, -44],
    // iconSize: [25, 55],
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    // shadowSize: [68, 95],
    // shadowAnchor: [20, 92],
});

const ReactLeaflet = ({ lat, lng }) => {
    const position = [lat, lng]; //위도(lat),경도(lng)
    const map = (
        <Map center={position} zoom={13} style={{ height: "400px" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={pointerIcon}>
                <Popup>
                    A pretty CSS3 popup.
                    <br />
                    Easily customizable.
                </Popup>
            </Marker>
        </Map>
    );
    return (
        <div>
            Leaflet 부분 컴포넌트(임시 좌표)
            {map}
        </div>
    );
};

export default ReactLeaflet;
