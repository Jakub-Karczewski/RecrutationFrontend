import {MapContainer, TileLayer, useMapEvents} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import {useState} from "react";

function LocationMarker({ onChange }) {
    useMapEvents({
        click(e) {
            const {lat, lng} = e.latlng;
            const pos = {lat: lat, lon: lng};
            onChange(pos);
        },
    });
}
const WeatherMap = ({onChange}) => {
    const h = '400px'
    const w = '100%'
    return<div class="flex justify-center">
        <MapContainer
        center={{lat: 51.505, lng: -0.09}}
        zoom={13}
        scrollWheelZoom={true}
        style={{height: '400px', width: '70%'}}
    >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker onChange={onChange}/>
    </MapContainer>
    </div>
}
export default WeatherMap;