import { Farm } from "@/lib/domain/Farm";
import ApiaryRepositoryMemory from "../ApiaryRepositoryMemory";

describe("testing ApiaryRepositoryMemory methods", () => {
  const apiaryRepositoryMemory = new ApiaryRepositoryMemory();
  let apiary = new Farm("1", "Apiary 1");

  beforeAll(async () => {
    await apiaryRepositoryMemory.save(apiary);
  });

  test("get by Id", async () => {
    let entry = await apiaryRepositoryMemory.getById("1");
    let expectedOutput = {
      _name: "Apiary 1",
      _uuid: "1",
    };

    expect(entry).toEqual(expectedOutput);
  });
  test("get all", async () => {
    let entry = await apiaryRepositoryMemory.getAll();
    let expectedResponse = expect.arrayContaining([
      expect.objectContaining({
        _name: expect.any(String),
        _uuid: expect.any(String),
      }),
    ]);

    expect(entry).toEqual(expectedResponse);
  });
  test("delete", async () => {
    let entry = await apiaryRepositoryMemory.delete(apiary);
    let expectedOutput = apiary.uuid;

    expect(entry).toEqual(expectedOutput);
  });
});
