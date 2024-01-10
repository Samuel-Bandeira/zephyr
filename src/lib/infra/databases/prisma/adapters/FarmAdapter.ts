import { Farm } from "@/lib/domain/Farm";
import { WindTurbine } from "@/lib/domain/WindTurbine";
import { Prisma } from "@prisma/client";
import { WindTurbineAdapter } from "./WindTurbineAdapter";

type FarmWithWindTurbines = Prisma.FarmGetPayload<{
  include: { windTurbines: true };
}>;

export class FarmAdapter {
  static toModel(farmEntity: FarmWithWindTurbines): Farm {
    const windTurbines: WindTurbine[] = farmEntity.windTurbines.map((WindTurbineEntity) =>
      WindTurbineAdapter.toModel(WindTurbineEntity)
    );

    return new Farm(
      farmEntity.uuid,
      farmEntity.name,
      Number(farmEntity.latitude),
      Number(farmEntity.longitude),
      windTurbines
    );
  }
}
