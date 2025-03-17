import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/64/2776/2776067.png', 
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

function Mapa() {
  const center = [-23.550520, -46.633308]; 
  const zoom = 15;

  return (
    <div className="map-container">
      <h2>Nosso Local</h2>
      <MapContainer center={center} zoom={zoom} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={center} icon={customIcon}>
          <Popup>
            Estamos na Praça da Sé, em São Paulo!<br /> Multimarcas.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Mapa;
