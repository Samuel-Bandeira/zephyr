import { WindTurbine } from "@/lib/domain/WindTurbine";
import HiveRepositoryMemory from "../HiveRepositoryMemory";

describe("testing HiveRepositoryMemory methods", () => {
  const hiveRepositoryMemory = new HiveRepositoryMemory();
  let hive = new WindTurbine("1", "Hive 1", 30.3, 30.35, "1");

  test("save", async () => {
    let entry = await hiveRepositoryMemory.save(hive);
    let expectedOutput = hive;

    expect(entry).toEqual(expectedOutput);
  });
  test("get by Id", async () => {
    let entry = await hiveRepositoryMemory.getById("1");
    let expectedOutput = hive;

    expect(entry).toEqual(expectedOutput);
  });
  test("get by Latitude", async () => {
    let entry = await hiveRepositoryMemory.getByLatitude(30.3);
    let expectedOutput = expect.arrayContaining([
      expect.objectContaining({
        name: "Hive 1",
        latitude: 30.3,
        longitude: 30.35,
        uuid: "1",
        apiaryId: "1",
      }),
    ]);

    expect(entry).toEqual(expectedOutput);
  });
  test("get by Longitude", async () => {
    let entry = await hiveRepositoryMemory.getByLongitude(30.35);
    let expectedOutput = expect.arrayContaining([
      expect.objectContaining({
        name: "Hive 1",
        latitude: 30.3,
        longitude: 30.35,
        uuid: "1",
        apiaryId: "1",
      }),
    ]);

    expect(entry).toEqual(expectedOutput);
  });
  test("get by Latitude and Longitude", async () => {
    let entry = await hiveRepositoryMemory.getByLatitudeLongitude(30.3, 30.35);
    let expectedOutput = hive;

    expect(entry).toEqual(expectedOutput);
  });
  test("get all", async () => {
    let entry = await hiveRepositoryMemory.getAll();
    let expectedResponse = expect.arrayContaining([
      expect.objectContaining({
        name: expect.any(String),
        latitude: expect.any(Number),
        longitude: expect.any(Number),
        uuid: expect.any(String),
      }),
    ]);

    expect(entry).toEqual(expectedResponse);
  });
  test("delete", async () => {
    let entry = await hiveRepositoryMemory.delete(hive);
    let expectedOutput = hive.uuid;

    expect(entry).toEqual(expectedOutput);
  });
});
