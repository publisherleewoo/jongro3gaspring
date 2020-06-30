import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const ReactLeaflet = () => {
    const position = [51.505, -0.09];
    const map = (
        <Map center={position} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
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
            <h1>Leaflet 에러, 대안필요</h1>
            {map}
        </div>
    );
};

export default ReactLeaflet;
