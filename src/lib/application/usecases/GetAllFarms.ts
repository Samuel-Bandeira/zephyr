import { Farm } from "@/lib/domain/Farm";
import type FarmRepository from "../repositories/FarmRepository";
import UseCase from "./UseCase";

import { TYPES } from "@/lib/types";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import IGetAllFarms from "./IGetAllFarms";

@injectable()
export default class GetAllFarms implements IGetAllFarms {
  private _farmRepository: FarmRepository;

  constructor(@inject(TYPES.FarmRepository) farmRepository: FarmRepository) {
    this._farmRepository = farmRepository;
  }

  async execute(): Promise<Output> {
    const farms = await this._farmRepository.getAll();
    if (!farms) throw new Error("Error on fetch farms");
    return {
      farms: farms,
    };
  }
}

type Output = {
  farms: Farm[];
};
