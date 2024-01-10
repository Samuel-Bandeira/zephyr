// import { apiaries } from "@/lib/data";

import { Farm } from "@/lib/domain/Farm";
import { useMapNavigationStore } from "@/stores/map-navigation";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, TileLayer, useMap } from "react-leaflet";

export default function MapContent() {
  const map = useMap();
  const [apiaries, setApiaries] = useState<Farm[]>([]);
  const selectedApiary = useMapNavigationStore((state) => state.selectedApiary);

  const setSelectedApiary = useMapNavigationStore(
    (state) => state.setSelectedApiary
  );
  const setSelectedHive = useMapNavigationStore(
    (state) => state.setSelectedHive
  );
  const expandedApiaryView = useMapNavigationStore(
    (state) => state.expandedApiaryView
  );

  useEffect(() => {
    const getApiaries = async () => {
      const response = await fetch("/api/v1/apiary", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { apiaries } = await response.json();
      console.log("apiaries", apiaries);
      setApiaries(apiaries);
    };

    getApiaries();
  }, []);

  useEffect(() => {
    if (selectedApiary) {
      map.flyTo([selectedApiary?.latitude, selectedApiary?.longitude]);
    }
  }, [selectedApiary]);

  const apiaryIcon = new Icon({
    iconSize: [41, 48],
    iconAnchor: [0, 10],
    iconUrl: "https://i.imgur.com/29MLLay.png",
  });

  const hiveIcon = new Icon({
    iconSize: [41, 48],
    iconAnchor: [0, 10],
    iconUrl: "https://i.imgur.com/nNrz8Zf.png",
  });

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {!selectedApiary &&
        apiaries.map((apiary) => (
          <Marker
            icon={apiaryIcon}
            position={{ lat: apiary.latitude, lng: apiary.longitude }}
            eventHandlers={{
              click: (event) => {
                event.originalEvent.preventDefault();
                setSelectedApiary(apiary);
              },
            }}
          />
        ))}

      {selectedApiary && !expandedApiaryView && (
        <Marker
          icon={apiaryIcon}
          position={[selectedApiary.latitude, selectedApiary.longitude]}
          eventHandlers={{
            click: (event) => {
              event.originalEvent.preventDefault();
              setSelectedApiary(undefined);
            },
          }}
        />
      )}

      {selectedApiary &&
        selectedApiary.windTurbines &&
        expandedApiaryView &&
        selectedApiary.windTurbines.map((hive) => (
          <Marker
            icon={hiveIcon}
            position={[hive.latitude, hive.longitude]}
            eventHandlers={{
              click: (event) => {
                event.originalEvent.preventDefault();
                setSelectedHive(hive);
              },
            }}
          />
        ))}
    </>
  );
}
