"use client";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Correction pour les icônes de marqueurs par défaut dans Next.js
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const points: [number, number][] = [
  [47.73, -3.34], // Lorient (Départ)
  [47.63, -3.47], // Groix
  [47.711, -3.99], // Glénan
  [47.31, -3.15], // Belle-Île
];

export default function ExpeditionMap() {
  return (
    <div className="h-[500px] w-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
      <MapContainer
        center={[47.6, -3.5]}
        zoom={9}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {/* Marqueur Lorient */}
        <Marker position={[47.732, -3.37]} icon={customIcon}>
          <Popup className="font-bold text-blue-600">
            ⚓ Port de Locmiquélic, Lorient
          </Popup>
        </Marker>

        {/* Marqueur Groix */}
        <Marker position={[47.64, -3.45]} icon={customIcon}>
          <Popup className="font-bold text-blue-600">
            🏝️ Île de Groix - Port Connard ❤️{" "}
          </Popup>
        </Marker>

        {/* Marqueur Glenan */}
        <Marker position={[47.711, -3.99]} icon={customIcon}>
          <Popup className="font-bold text-blue-600">
            🏝️ Archipel des Glénans{" "}
          </Popup>
        </Marker>

        {/* Marqueur Belle-Île */}
        <Marker position={[47.31, -3.15]} icon={customIcon}>
          <Popup className="font-bold text-blue-600">🏝️ Belle-Île </Popup>
        </Marker>

        {/* Marqueur Belle-Île */}
        <Marker
          position={[47.44933738500455, -3.259205460317857]}
          icon={customIcon}
        >
          <Popup className="font-bold text-blue-600">
            🤢 Là où Adri était tout vert
          </Popup>
        </Marker>

        {/* Marqueur Belle-Île */}
        <Marker
          position={[47.37261075665096, -2.907788632526322]}
          icon={customIcon}
        >
          <Popup className="font-bold text-blue-600">
            🏝️ Houate et Hoedic, deux îles trop mims
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
