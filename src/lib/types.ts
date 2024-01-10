const TYPES = {
  // Repositories
  FarmRepository: Symbol.for("FarmRepository"),
  WindTurbineRepository: Symbol.for("WindTurbineRepository"),

  // Methods Interfaces
  IGetAllFarms: Symbol.for("IGetAllFarms"),
  IGetAllWindTurbines: Symbol.for("IGetAllWindTurbines"),
  ICreateFarm: Symbol.for("ICreateFarm"),
  ICreateWindTurbine: Symbol.for("ICreateWindTurbine"),
};

export { TYPES };
