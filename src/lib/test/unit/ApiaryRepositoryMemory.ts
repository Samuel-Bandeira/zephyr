import FarmRepository from "@/lib/application/repositories/FarmRepository";
import { Farm } from "@/lib/domain/Farm";
import { FarmAdapter } from "@/lib/infra/databases/prisma/adapters/FarmAdapter";

export default class ApiaryRepositoryMemory implements FarmRepository {
  public apiaries: Farm[] = [];

  async save(apiary: Farm): Promise<Farm> {
    try {
      this.apiaries.push(apiary);
      return apiary;
    } catch (error) {
      throw new Error("Error on create apiary.");
    }
  }
  async getById(apiaryId: string): Promise<Farm | null> {
    try {
      let apiaryWithSpecificId: Farm | null = null;
      for (let apiary of this.apiaries) {
        if (apiary.uuid === apiaryId) {
          apiaryWithSpecificId = apiary;
          break;
        }
      }

      if (!apiaryWithSpecificId) {
        return null;
      }

      return apiaryWithSpecificId;
    } catch (error) {
      throw new Error(`Error on find apiary with Id ${apiaryId}`);
    }
  }
  async getByName(name: string): Promise<Farm[] | null> {
    try {
      let apiariesWithSpecificName: Farm[] | null = [];
      for (let apiary of this.apiaries) {
        if (apiary.name === name) {
          apiariesWithSpecificName.push(apiary);
          break;
        }
      }

      if (apiariesWithSpecificName.length === 0) {
        return [];
      }

      const apiaries: Farm[] = apiariesWithSpecificName.map(
        (apiaryEntity: any) => FarmAdapter.toModel(apiaryEntity)
      );

      return apiaries;
    } catch (error) {
      throw new Error(`Error on find apiaries with name ${name}`);
    }
  }
  async getByLatitude(latitude: number): Promise<Farm[] | null> {
    try {
      let apiariesWithSpecificLatitude: Farm[] | null = [];
      for (let apiary of this.apiaries) {
        if (apiary.latitude === latitude) {
          apiariesWithSpecificLatitude.push(apiary);
        }
      }

      if (apiariesWithSpecificLatitude.length === 0) {
        return [];
      }

      return apiariesWithSpecificLatitude;
    } catch (error) {
      throw new Error(`Error on find apiaries with latitude ${latitude}`);
    }
  }
  async getByLongitude(longitude: number): Promise<Farm[] | null> {
    try {
      let apiariesWithSpecificLongitude: Farm[] | null = [];
      for (let apiary of this.apiaries) {
        if (apiary.longitude === longitude) {
          apiariesWithSpecificLongitude.push(apiary);
          break;
        }
      }

      if (apiariesWithSpecificLongitude.length === 0) {
        return [];
      }

      return apiariesWithSpecificLongitude;
    } catch (error) {
      throw new Error(`Error on find apiaries with longitude ${longitude}`);
    }
  }
  async getByLatitudeLongitude(
    latitude: number,
    longitude: number
  ): Promise<Farm[] | null> {
    try {
      let apiariesWithSpecificLatitudeLongitude: Farm[] | null = [];
      for (let apiary of this.apiaries) {
        if (apiary.latitude === latitude && apiary.longitude === longitude) {
          apiariesWithSpecificLatitudeLongitude.push(apiary);
          break;
        }
      }

      if (apiariesWithSpecificLatitudeLongitude.length === 0) {
        return [];
      }

      return apiariesWithSpecificLatitudeLongitude;
    } catch (error) {
      throw new Error(
        `Error on find apiaries with latitude ${latitude} and longitude ${longitude}`
      );
    }
  }
  async getAll(): Promise<Farm[] | null> {
    try {
      return this.apiaries;
    } catch (error) {
      throw new Error("Error on find apiaries");
    }
  }
  async delete(apiary: Farm): Promise<string> {
    try {
      let apiaryIndex = this.apiaries.indexOf(apiary);
      this.apiaries.splice(apiaryIndex, 1);
      return apiary.uuid;
    } catch (error) {
      throw new Error("Error on create apiary.");
    }
  }
}
