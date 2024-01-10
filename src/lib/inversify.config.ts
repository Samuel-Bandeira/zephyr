import { Container } from "inversify";
// Repositories
import FarmRepository from "./application/repositories/FarmRepository";
import FarmRepositoryPrisma from "./infra/repositories/FarmRepositoryPrisma";
import WindTurbineRepository from "./application/repositories/WindTurbineRepository";
import WindTurbineRepositoryPrisma from "./infra/repositories/WindTurbineRepositoryPrisma";

import { TYPES } from "./types";

// Methods Interfaces
import GetAllFarms from "./application/usecases/GetAllFarms";
import IGetAllFarms from "./application/usecases/IGetAllFarms";
import GetAllWindTurbines from "./application/usecases/GetAllWindTurbines";
import CreateFarm from "./application/usecases/CreateFarm";
import ICreateFarm from "./application/usecases/ICreateFarm";
import CreateWindTurbine from "./application/usecases/CreateWindTurbine";
import ICreateWindTurbine from "./application/usecases/ICreateWindTurbine";

const diContainer = new Container();
// Repositories
diContainer.bind<FarmRepository>(TYPES.FarmRepository).to(FarmRepositoryPrisma);
diContainer
  .bind<WindTurbineRepository>(TYPES.WindTurbineRepository)
  .to(WindTurbineRepositoryPrisma);

// Methods Interfaces
diContainer.bind<IGetAllFarms>(TYPES.IGetAllFarms).to(GetAllFarms);
diContainer
  .bind<IGetAllFarms>(TYPES.IGetAllWindTurbines)
  .to(GetAllWindTurbines);
diContainer.bind<ICreateFarm>(TYPES.ICreateFarm).to(CreateFarm);
diContainer
  .bind<ICreateWindTurbine>(TYPES.ICreateWindTurbine)
  .to(CreateWindTurbine);

export { diContainer };
