import {MapContainer, TileLayer, useMapEvents} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import {useState} from "react";

function LocationMarker({onChange}) {
    const map = useMapEvents({
        click(e) {
            onChange(e.latlng);
        }
    })

    return null;
}
const WeatherMap = ({onChange}) => {
    return <MapContainer
        center={{ lat: 51.505, lng: -0.09 }}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '400px', width: '100%' }}
    >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker onChange={onChange}/>
    </MapContainer>
}
export default WeatherMap;