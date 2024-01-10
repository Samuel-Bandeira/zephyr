import { WindTurbine } from "@/lib/domain/WindTurbine";
import WindTurbineRepositoryPrisma from "@/lib/infra/repositories/WindTurbineRepositoryPrisma";
import exp from "constants";

describe("testing HiveRepositoryPrisma methods", () => {
  const hiveRepositoryPrisma = new WindTurbineRepositoryPrisma();
  let hive = new WindTurbine("1", "Hive 1", 30.3, 30.35, "1");

  test("should return new Hive object when save a new Hive", async () => {
    let entry = await hiveRepositoryPrisma.save(hive);
    let expectedOutput = hive;

    expect(entry).toEqual(expectedOutput);
  });
  test("should return Hive object given id", async () => {
    let entry = await hiveRepositoryPrisma.getById("1");
    let expectedOutput = hive;

    expect(entry).toEqual(expectedOutput);
  });
  test("should return Hive array given latitude number", async () => {
    let entry = await hiveRepositoryPrisma.getByLatitude(30.3);
    let expectedOutput = expect.arrayContaining([
      expect.objectContaining({
        name: "Hive 1",
        latitude: 30.3,
        longitude: 30.35,
        apiaryId: "1",
      }),
    ]);

    expect(entry).toEqual(expectedOutput);
  });
  test("should return Hive array given longitude number", async () => {
    let entry = await hiveRepositoryPrisma.getByLongitude(30.35);
    let expectedOutput = expect.arrayContaining([
      expect.objectContaining({
        name: "Hive 1",
        latitude: 30.3,
        longitude: 30.35,
        apiaryId: "1",
      }),
    ]);

    expect(entry).toEqual(expectedOutput);
  });
  test("should return Hive object given latitude and longitude numbers", async () => {
    let entry = await hiveRepositoryPrisma.getByLatitudeLongitude(30.3, 30.35);
    let expectedOutput = hive;

    expect(entry).toEqual(expectedOutput);
  });
  test("should return Hive array", async () => {
    let entry = await hiveRepositoryPrisma.getAll();
    let expectedResponse = expect.arrayContaining([
      expect.objectContaining({
        name: expect.any(String),
        latitude: expect.any(Number),
        longitude: expect.any(Number),
        uuid: expect.any(String),
        apiaryId: expect.any(String),
      }),
    ]);

    expect(entry).toEqual(expectedResponse);
  });
  test("should return deleted Hive uuid", async () => {
    let entry = await hiveRepositoryPrisma.delete(hive);
    let expectedOutput = hive.uuid;

    expect(entry).toEqual(expectedOutput);
  });
});
