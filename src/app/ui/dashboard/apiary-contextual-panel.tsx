import { Button } from "@/components/ui/button";
import { useMapNavigationStore } from "@/stores/map-navigation";
import RegisterHive from "./register-hive";

export default function ApiaryContextualPanel() {
  const selectedApiary = useMapNavigationStore((state) => state.selectedApiary);
  const setExpandedApiaryView = useMapNavigationStore(
    (state) => state.setExpandedApiaryView
  );
  const expandedApiaryView = useMapNavigationStore(
    (state) => state.expandedApiaryView
  );

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-white w-96 border-l border-gray-300">
      <h6 className="font-bold text-xl">{selectedApiary?.name}</h6>
      <p>Latitude: {selectedApiary?.latitude}</p>
      <p>Longitude: {selectedApiary?.longitude}</p>

      {!expandedApiaryView ? (
        <>
          <Button
            className="mt-3 bg-blue-600 hover:bg-blue-700 hover:text-white font-medium"
            onClick={() => setExpandedApiaryView(true)}
          >
            Detalhar
          </Button>
          <RegisterHive />
        </>
      ) : (
        <Button
          className="bg-blue-600 hover:bg-blue-700 hover:text-white font-medium"
          onClick={() => setExpandedApiaryView(false)}
        >
          Menos Detalhes
        </Button>
      )}
    </div>
  );
}
