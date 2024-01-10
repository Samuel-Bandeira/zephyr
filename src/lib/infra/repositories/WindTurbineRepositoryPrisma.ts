import WindTurbineRepository from "@/lib/application/repositories/WindTurbineRepository";
import { WindTurbine } from "@/lib/domain/WindTurbine";
import { WindTurbineAdapter } from "../databases/prisma/adapters/WindTurbineAdapter";
import prisma from "../databases/prisma/client";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export default class WindTurbineRepositoryPrisma
  implements WindTurbineRepository
{
  async save(windTurbine: WindTurbine): Promise<WindTurbine> {
    try {
      let windTurbineSaved = await prisma.windTurbine.create({
        data: {
          uuid: windTurbine.uuid,
          name: windTurbine.name,
          latitude: windTurbine.latitude,
          longitude: windTurbine.longitude,
          farmId: windTurbine.farmId,
        },
      });
      return WindTurbineAdapter.toModel(windTurbineSaved);
    } catch (error) {
      console.log("error", error);
      throw new Error("Error on create wind turbine.");
    }
  }
  async getById(windTurbineId: string): Promise<WindTurbine | null> {
    try {
      const WindTurbineEntity = await prisma.windTurbine.findFirst({
        where: {
          uuid: windTurbineId,
        },
      });

      if (!WindTurbineEntity) {
        return null;
      }

      return WindTurbineAdapter.toModel(WindTurbineEntity);
    } catch (error) {
      throw new Error(`Error on fetch wind turbine with Id ${windTurbineId}`);
    }
  }
  async getByName(name: string): Promise<WindTurbine[] | null> {
    try {
      const windTurbinesEntities = await prisma.windTurbine.findMany({
        where: {
          name: name,
        },
      });

      if (windTurbinesEntities.length === 0) {
        return [];
      }

      const windTurbine: WindTurbine[] = windTurbinesEntities.map(
        (windTurbineEntity: any) =>
          WindTurbineAdapter.toModel(windTurbineEntity)
      );

      return windTurbine;
    } catch (error) {
      throw new Error(`Error on fetch wind turbines with name ${name}`);
    }
  }
  async getByLatitude(latitude: number): Promise<WindTurbine[] | null> {
    try {
      const windTurbineEntities = await prisma.windTurbine.findMany({
        where: {
          latitude: latitude,
        },
      });

      if (windTurbineEntities.length === 0) {
        return [];
      }

      const windTurbines: WindTurbine[] = windTurbineEntities.map(
        (windTurbineEntity: any) =>
          WindTurbineAdapter.toModel(windTurbineEntity)
      );

      return windTurbines;
    } catch (error) {
      throw new Error(`Error on fetch wind turbines with latitude ${latitude}`);
    }
  }
  async getByLongitude(longitude: number): Promise<WindTurbine[] | null> {
    try {
      const windTurbinesEntities = await prisma.windTurbine.findMany({
        where: {
          longitude: longitude,
        },
      });

      if (windTurbinesEntities.length === 0) {
        return [];
      }

      const windTurbine: WindTurbine[] = windTurbinesEntities.map(
        (windTurbineEntity: any) =>
          WindTurbineAdapter.toModel(windTurbineEntity)
      );

      return windTurbine;
    } catch (error) {
      throw new Error(
        `Error on fetch wind turbines with longitude ${longitude}`
      );
    }
  }
  async getByLatitudeLongitude(
    latitude: number,
    longitude: number
  ): Promise<WindTurbine | null> {
    try {
      const windTurbineEntity = await prisma.windTurbine.findFirst({
        where: {
          latitude: latitude,
          longitude: longitude,
        },
      });

      if (!windTurbineEntity) {
        return null;
      }

      const windTurbine: WindTurbine =
        WindTurbineAdapter.toModel(windTurbineEntity);

      return windTurbine;
    } catch (error) {
      throw new Error(
        `Error on fetch wind turbines with latitude ${latitude} and longitude ${longitude}`
      );
    }
  }
  async getAll(): Promise<WindTurbine[] | null> {
    try {
      const WindTurbineEntities = await prisma.windTurbine.findMany();

      if (WindTurbineEntities.length === 0) {
        return [];
      }

      const windTurbine: WindTurbine[] = WindTurbineEntities.map(
        (windTurbineEntity: any) =>
          WindTurbineAdapter.toModel(windTurbineEntity)
      );

      return windTurbine;
    } catch (error) {
      throw new Error("Error on fetch wind turbines");
    }
  }
  async delete(windTurbine: WindTurbine): Promise<string | null> {
    try {
      let windTurbineDeleted = await prisma.windTurbine.delete({
        where: {
          uuid: windTurbine.uuid,
          name: windTurbine.name,
          latitude: windTurbine.latitude,
          longitude: windTurbine.longitude,
          farmId: windTurbine.farmId,
        },
      });

      if (!windTurbineDeleted) {
        return null;
      }

      return windTurbineDeleted.uuid;
    } catch (error) {
      throw new Error("Error on delete wind turbine.");
    }
  }
}
