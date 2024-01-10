import { WindTurbine as WindTurbineEntity } from "@prisma/client";
import { WindTurbine } from "@/lib/domain/WindTurbine";

export class WindTurbineAdapter {
  static toModel(windTurbineEntity: WindTurbineEntity): WindTurbine {
    return new WindTurbine(
      windTurbineEntity.uuid,
      windTurbineEntity.name,
      Number(windTurbineEntity.latitude),
      Number(windTurbineEntity.longitude),
      windTurbineEntity.farmId
    );
  }
}
