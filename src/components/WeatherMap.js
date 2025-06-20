import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";

const customMarkerIcon = new L.DivIcon({
    html: `<div style="color: red; font-size: 32px;">
           <i class="fas fa-map-marker-alt"></i>
         </div>`,
    className: ''
});

function LocationMarker({ onChange, position }) {
    useMapEvents({
        click(e) {
            const {lat, lng} = e.latlng;
            const pos = {lat: lat, lon: lng};
            onChange(pos);
        },
    });
    return position === null ? null : (
        <Marker position={position} icon={customMarkerIcon} />
    );
}
const WeatherMap = ({onChange, position}) => {
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
        <LocationMarker onChange={onChange} position={position}/>
    </MapContainer>
    </div>
}
export default WeatherMap;