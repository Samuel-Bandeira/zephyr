import IGetAllFarms from "@/lib/application/usecases/IGetAllFarms";
import { diContainer } from "@/lib/inversify.config";
import { TYPES } from "@/lib/types";

describe("testing GetAllApiaries use case", () => {
  test("dummy test", async () => {
    const getAllApiaries = diContainer.get<IGetAllFarms>(TYPES.IGetAllFarms);

    console.log(await getAllApiaries.execute());

    expect(1).toEqual(1);
  });
});
