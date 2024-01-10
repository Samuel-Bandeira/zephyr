import { Farm } from "@/lib/domain/Farm";
import { WindTurbine } from "@/lib/domain/WindTurbine";

describe("testing Apiary methods", () => {
  const hive1 = new WindTurbine("1", "hive 1", 30, 35, "1");
  const hive2 = new WindTurbine("2", "hive 2", 50, 65, "1");
  const hive3 = new WindTurbine("3", "hive 3", 100, 20, "1");

  const apiary = new Farm("1", "apiário 1", [hive1, hive2, hive3]);

  test("get all related Hives", async () => {
    let entry = apiary.windTurbines;
    let expectedResponse = [hive1, hive2, hive3];

    expect(entry).toEqual(expectedResponse);
  });
  test("get position", async () => {
    let position = apiary.position;
    apiary.position = position;

    let entry = apiary.position;
    let expectedResponse = { latitude: 60, longitude: 40 };

    expect(entry).toEqual(expectedResponse);
  });
});
