"use client";

import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/1201/1201643.png",
  iconSize: [40, 40],
});

const Map = () => {
  return (
    <MapContainer
      center={[49.44319969093555, 32.062166385171274]}
      zoom={20}
      scrollWheelZoom={false}
      className="w-full h-[150px] md:h-[300px] lg:h-[400px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[49.44319118701302, 32.06214977392717]}
        icon={customIcon}
      >
        <Popup className="text-xs">
          Черкаська обл., м. Черкаси,
          <br />
          вул. Остафія Дашкевича, 29
          <br />
          <br /> Пн-Пт: 09:00-18:00,
          <br /> Сб: 10:00-16:00, Нд: вихідний.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
