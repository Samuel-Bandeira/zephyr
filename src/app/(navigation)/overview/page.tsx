"use client";

import ApiaryContextualPanel from "@/app/ui/dashboard/apiary-contextual-panel";
import HiveContextualPanel from "@/app/ui/dashboard/hive-contextual-panel";
import { useMapNavigationStore } from "@/stores/map-navigation";

import dynamic from "next/dynamic";

const ClientRenderedMap = dynamic(() => import("./client-rendered-map"), {
  ssr: false,
});

export default function Page() {
  const selectedApiary = useMapNavigationStore((state) => state.selectedApiary);
  const selectedHive = useMapNavigationStore((state) => state.selectedHive);

  return (
    <div className="w-full h-full flex flex-row">
      <ClientRenderedMap />
      {selectedApiary && !selectedHive ? <ApiaryContextualPanel /> : null}
      {selectedApiary && selectedHive ? <HiveContextualPanel /> : null}
    </div>
  );
}
