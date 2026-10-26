import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default Leaflet marker icons in React
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function App() {
  // Single Location Coordinates (Example: Statue of Liberty, New York)
  const location = {
    lat: 16.4422,
    lng:  80.6225,
    name: 'kl university, vaddeswaram, India', // You can change this to any location name

  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Interactive Single Location Map</h1>
      <p style={{ color: '#555', marginBottom: '20px' }}>
        Showing location: <strong>{location.name}</strong>
      </p>

      {/* Map Container Box */}
      <div style={{ height: '450px', width: '100%', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          {/* OpenStreetMap Tile Layer (Free, no API key required) */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* Single Marker with Popup */}
          <Marker position={[location.lat, location.lng]}>
            <Popup>
              📍 {location.name}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;