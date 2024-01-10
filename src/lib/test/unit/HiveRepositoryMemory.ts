import WindTurbineRepository from "@/lib/application/repositories/WindTurbineRepository";
import { WindTurbine } from "@/lib/domain/WindTurbine";
import { WindTurbineAdapter } from "@/lib/infra/databases/prisma/adapters/WindTurbineAdapter";

export default class HiveRepositoryMemory implements WindTurbineRepository {
  public hives: WindTurbine[] = [];

  async save(hive: WindTurbine): Promise<WindTurbine> {
    try {
      this.hives.push(hive);
      return hive;
    } catch (error) {
      throw new Error("Error on create hive.");
    }
  }
  async getById(hiveId: string): Promise<WindTurbine | null> {
    try {
      let hiveWithSpecificId: WindTurbine | null = null;
      for (let hive of this.hives) {
        if (hive.uuid === hiveId) {
          hiveWithSpecificId = hive;
          break;
        }
      }

      if (!hiveWithSpecificId) {
        return null;
      }

      return hiveWithSpecificId;
    } catch (error) {
      throw new Error(`Error on find hive with Id ${hiveId}`);
    }
  }
  async getByName(name: string): Promise<WindTurbine[] | null> {
    try {
      let hivesWithSpecificName: WindTurbine[] | null = [];
      for (let hive of this.hives) {
        if (hive.name === name) {
          hivesWithSpecificName.push(hive);
          break;
        }
      }

      if (hivesWithSpecificName.length === 0) {
        return [];
      }

      const hives: WindTurbine[] = hivesWithSpecificName.map(
        (hiveEntity: any) => WindTurbineAdapter.toModel(hiveEntity)
      );

      return hives;
    } catch (error) {
      throw new Error(`Error on find hives with name ${name}`);
    }
  }
  async getByLatitude(latitude: number): Promise<WindTurbine[] | null> {
    try {
      let hivesWithSpecificLatitude: WindTurbine[] | null = [];
      for (let hive of this.hives) {
        if (hive.latitude === latitude) {
          hivesWithSpecificLatitude.push(hive);
        }
      }

      if (hivesWithSpecificLatitude.length === 0) {
        return [];
      }

      return hivesWithSpecificLatitude;
    } catch (error) {
      throw new Error(`Error on find hives with latitude ${latitude}`);
    }
  }
  async getByLongitude(longitude: number): Promise<WindTurbine[] | null> {
    try {
      let hivesWithSpecificLongitude: WindTurbine[] | null = [];
      for (let hive of this.hives) {
        if (hive.longitude === longitude) {
          hivesWithSpecificLongitude.push(hive);
          break;
        }
      }

      if (hivesWithSpecificLongitude.length === 0) {
        return [];
      }

      return hivesWithSpecificLongitude;
    } catch (error) {
      throw new Error(`Error on find hives with longitude ${longitude}`);
    }
  }
  async getByLatitudeLongitude(
    latitude: number,
    longitude: number
  ): Promise<WindTurbine | null> {
    try {
      let hiveWithSpecificLatitudeLongitude: WindTurbine | null = null;
      for (let hive of this.hives) {
        if (hive.latitude === latitude && hive.longitude === longitude) {
          hiveWithSpecificLatitudeLongitude = hive;
          break;
        }
      }

      if (!hiveWithSpecificLatitudeLongitude) {
        return null;
      }

      return hiveWithSpecificLatitudeLongitude;
    } catch (error) {
      throw new Error(
        `Error on find hive with latitude ${latitude} and longitude ${longitude}`
      );
    }
  }
  async getAll(): Promise<WindTurbine[] | null> {
    try {
      return this.hives;
    } catch (error) {
      throw new Error("Error on find hives");
    }
  }
  async delete(hive: WindTurbine): Promise<string> {
    try {
      let hiveIndex = this.hives.indexOf(hive);
      this.hives.splice(hiveIndex, 1);
      return hive.uuid;
    } catch (error) {
      throw new Error("Error on create hive.");
    }
  }
}
