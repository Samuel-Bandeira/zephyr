import { Farm } from "@/lib/domain/Farm";
import type FarmRepository from "../repositories/FarmRepository";

import { TYPES } from "@/lib/types";
import { randomUUID } from "crypto";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import ICreateFarm from "./ICreateFarm";

@injectable()
export default class CreateFarm implements ICreateFarm {
  private _farmRepository: FarmRepository;

  constructor(@inject(TYPES.FarmRepository) farmRepository: FarmRepository) {
    this._farmRepository = farmRepository;
  }

  async execute(createFarmInput: CreateFarmInput): Promise<Output> {
    const id = randomUUID();

    const name = createFarmInput.name;
    const latitude = createFarmInput.latitude;
    const longitude = createFarmInput.longitude;

    const farmInstance = new Farm(id, name, latitude, longitude, []);
    const farm = await this._farmRepository.save(farmInstance);
    if (!farm) throw new Error("Error on save Farm");

    return {
      farm: farm,
    };
  }
}

type CreateFarmInput = {
  name: string;
  latitude: number;
  longitude: number;
};

type Output = {
  farm: Farm;
};
