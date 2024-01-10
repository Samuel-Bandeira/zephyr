import { Button } from "@/components/ui/button";
import { useMapNavigationStore } from "@/stores/map-navigation";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { BarChart2Icon } from "lucide-react";
import Link from "next/link";

export default function HiveContextualPanel() {
  const selectedHive = useMapNavigationStore((state) => state.selectedHive);
  const setSelectedHive = useMapNavigationStore(
    (state) => state.setSelectedHive
  );
  const setExpandedApiaryView = useMapNavigationStore(
    (state) => state.setExpandedApiaryView
  );
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-white w-96 border-l border-gray-300">
      <div className="flex justify-between items-center mb-1">
        <Button
          asChild
          onClick={() => {
            setSelectedHive(undefined);
          }}
          variant="ghost"
          size="icon"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </Button>
        <h6 className="font-bold text-xl">{selectedHive?.name}</h6>
        <Button asChild variant="ghost" size="icon" className="h-6 w-6">
          {/* <Link href={"/dashboard/hive/1"}> */}
          <BarChart2Icon />
          {/* </Link> */}
        </Button>
      </div>
      <p>Latitude: {selectedHive?.latitude}</p>
      <p>Longitude: {selectedHive?.longitude}</p>
    </div>
  );
}
