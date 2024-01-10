import ICreateWindTurbine from "@/lib/application/usecases/ICreateWindTurbine";

import { diContainer } from "@/lib/inversify.config";
import { TYPES } from "@/lib/types";

describe("testing CreateHive use case", () => {
  test("dummy test", async () => {
    const HiveKindObject = {
      name: "Colméia 4",
      latitude: 30.3,
      longitude: 35.35,
      apiaryId: "1",
    };
    const CreateHive = diContainer.get<ICreateWindTurbine>(
      TYPES.ICreateWindTurbine
    );

    console.log(await CreateHive.execute(HiveKindObject));

    expect(1).toEqual(1);
  });
});
