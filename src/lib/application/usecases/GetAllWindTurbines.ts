import { WindTurbine } from "@/lib/domain/WindTurbine";
import type WindTurbineRepository from "../repositories/WindTurbineRepository";
import UseCase from "./UseCase";

import { TYPES } from "@/lib/types";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import IGetAllWindTurbines from "./IGetAllWindTurbines";

@injectable()
export default class GetAllWindTurbines implements IGetAllWindTurbines {
  private _windTurbineRepository: WindTurbineRepository;

  constructor(
    @inject(TYPES.WindTurbineRepository)
    windTurbineRepository: WindTurbineRepository
  ) {
    this._windTurbineRepository = windTurbineRepository;
  }

  async execute(): Promise<Output> {
    const windTurbines = await this._windTurbineRepository.getAll();
    if (!windTurbines) throw new Error("Error on fetch wind turbines");
    return {
      windTurbines: windTurbines,
    };
  }
}

type Output = {
  windTurbines: WindTurbine[];
};
