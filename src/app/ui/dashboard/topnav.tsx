"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RegisterApiary from "./register-apiary";
import { useMapNavigationStore } from "@/stores/map-navigation";
import { apiaries } from "@/lib/data";
import { useEffect, useState } from "react";

export default function TopNav() {
  const [selectValue, setSelectValue] = useState("");
  const selectedApiary = useMapNavigationStore((state) => state.selectedApiary);
  const expandedApiaryView = useMapNavigationStore(
    (state) => state.expandedApiaryView
  );
  const setSelectedApiary = useMapNavigationStore(
    (state) => state.setSelectedApiary
  );

  useEffect(() => {
    if (!selectedApiary) {
      setSelectValue("");
    } else {
      setSelectValue(selectedApiary.name);
    }
  }, [selectedApiary]);

  return (
    <div className="h-[70px] bg-gray-100/10 flex items-center justify-between">
      <Select
        disabled={expandedApiaryView ? true : false}
        value={selectValue}
        onValueChange={(newApiaryName) => {
          const apiary = apiaries.find((ap) => ap.name === newApiaryName);
          // setSelectedApiary(apiary);
          setSelectValue(newApiaryName);
        }}
      >
        <SelectTrigger className="w-[254px] mt-[5px] ml-[10px]">
          <SelectValue placeholder="Selecione uma fazenda" />
        </SelectTrigger>
        <SelectContent>
          {apiaries.map((apiary) => (
            <SelectItem value={apiary.name}>{apiary.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <RegisterApiary
        className="mr-3"
        disabled={selectedApiary ? true : false}
      />
    </div>
  );
}
