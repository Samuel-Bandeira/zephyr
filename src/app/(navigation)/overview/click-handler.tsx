import { useMapNavigationStore } from "@/stores/map-navigation";
import { useMapEvents } from "react-leaflet";

export default function ClickHandler() {
  const selectedApiary = useMapNavigationStore((state) => state.selectedApiary);

  const setSelectedApiary = useMapNavigationStore(
    (state) => state.setSelectedApiary
  );
  const setSelectedHive = useMapNavigationStore(
    (state) => state.setSelectedHive
  );
  const setExpandedApiaryView = useMapNavigationStore(
    (state) => state.setExpandedApiaryView
  );

  useMapEvents({
    click() {
      if (!selectedApiary) return;
      setSelectedApiary(undefined);
      setSelectedHive(undefined);
      setExpandedApiaryView(false);
    },
  });
  return null;
}
