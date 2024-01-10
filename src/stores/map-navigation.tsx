import { Farm } from "@/lib/domain/Farm";
import { WindTurbine } from "@/lib/domain/WindTurbine";
import { create } from "zustand";

// export interface Apiary {
//   name: string;
//   latitude: number;
//   longitude: number;
//   hives?: Hive[];
// }

// export interface Hive {
//   name: string;
//   latitude: number;
//   longitude: number;
// }

interface MapNavigationState {
  selectedApiary?: Farm;
  selectedHive?: WindTurbine;
  expandedApiaryView: boolean;
  setSelectedApiary: (apiary: Farm | undefined) => void;
  setSelectedHive: (hive: WindTurbine | undefined) => void;
  setExpandedApiaryView: (expandedView: boolean) => void;
}

export const useMapNavigationStore = create<MapNavigationState>((set) => ({
  selectedApiary: undefined,
  selectedHive: undefined,
  expandedApiaryView: false,
  setSelectedApiary: (apiary: Farm | undefined) =>
    set((state) => ({ selectedApiary: apiary })),
  setSelectedHive: (hive: WindTurbine | undefined) =>
    set((state) => ({ selectedHive: hive })),
  setExpandedApiaryView: (expandedView: boolean) =>
    set((state) => ({ expandedApiaryView: expandedView })),
}));
