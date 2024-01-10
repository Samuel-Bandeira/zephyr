import { WindTurbine } from "@/lib/domain/WindTurbine";
import type WindTurbineRepository from "../repositories/WindTurbineRepository";

import { TYPES } from "@/lib/types";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import ICreateWindTurbine from "./ICreateWindTurbine";
import { randomUUID } from "crypto";

@injectable()
export default class CreateWindTurbine implements ICreateWindTurbine {
  private _windTurbineRepository: WindTurbineRepository;

  constructor(
    @inject(TYPES.WindTurbineRepository)
    windTurbineRepository: WindTurbineRepository
  ) {
    this._windTurbineRepository = windTurbineRepository;
  }

  async execute(
    createWindTurbineInput: CreateWindTurbineInput
  ): Promise<Output> {
    const id = randomUUID();
    const name = createWindTurbineInput.name;
    const latitude = createWindTurbineInput.latitude;
    const longitude = createWindTurbineInput.longitude;
    const apiaryId = createWindTurbineInput.apiaryId;
    const windTurbineInstance = new WindTurbine(
      id,
      name,
      latitude,
      longitude,
      apiaryId
    );
    const windTurbine = await this._windTurbineRepository.save(
      windTurbineInstance
    );
    if (!windTurbine) throw new Error("Error on save Wind Turbine");
    return {
      windTurbine: windTurbine,
    };
  }
}

type CreateWindTurbineInput = {
  name: string;
  latitude: number;
  longitude: number;
  apiaryId: string;
};

type Output = {
  windTurbine: WindTurbine;
};
