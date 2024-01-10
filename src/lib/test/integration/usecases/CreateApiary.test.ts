import ICreateFarm from "@/lib/application/usecases/ICreateFarm";

import { diContainer } from "@/lib/inversify.config";
import { TYPES } from "@/lib/types";

describe("testing CreateApiary use case", () => {
  test("dummy test", async () => {
    const ApiaryKindObject = {
      name: "Apiário 4",
      latitude: 30,
      longitude: 35,
    };
    const CreateApiary = diContainer.get<ICreateFarm>(TYPES.ICreateFarm);

    console.log(await CreateApiary.execute(ApiaryKindObject));

    expect(1).toEqual(1);
  });
});
