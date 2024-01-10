import { Farm } from "@/lib/domain/Farm";
import FarmRepositoryPrisma from "@/lib/infra/repositories/FarmRepositoryPrisma";

describe("testing ApiaryRepositoryPrisma methods", () => {
  var apiaryRepositoryPrisma = new FarmRepositoryPrisma();
  let apiary = new Farm("2", "Apiary 2", [], 0, 0);

  test("should return new Apiary Object when save a new Apiary", async () => {
    let entry = await apiaryRepositoryPrisma.save(apiary);
    let expectedOutput = apiary;

    expect(entry).toEqual(expectedOutput);
  });
  test("should return Apiary object given id", async () => {
    let entry = await apiaryRepositoryPrisma.getById("2");
    let expectedOutput = apiary;

    expect(entry).toEqual(expectedOutput);
  });
  test("should return Apiary array", async () => {
    let entry = await apiaryRepositoryPrisma.getAll();
    let expectedResponse = expect.arrayContaining([
      expect.objectContaining({
        uuid: expect.any(String),
        name: expect.any(String),
        latitude: expect.any(Number),
        longitude: expect.any(Number),
      }),
    ]);

    expect(entry).toEqual(expectedResponse);
  });
  test("should return deleted apiary uuid", async () => {
    let entry = await apiaryRepositoryPrisma.delete(apiary);
    let expectedOutput = apiary.uuid;

    expect(entry).toEqual(expectedOutput);
  });
});
