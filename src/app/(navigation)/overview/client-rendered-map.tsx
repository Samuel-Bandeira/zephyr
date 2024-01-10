import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet";
import MapContent from "./map-content";
import ClickHandler from "./click-handler";

export default function ClientRenderedMap() {
  return (
    <MapContainer center={[-3.7753623818009343, -38.58542240793375]} zoom={50} scrollWheelZoom={false} className="w-full h-full z-0" doubleClickZoom={false}>
      <MapContent />
      <ClickHandler />
    </MapContainer>
  );
}
