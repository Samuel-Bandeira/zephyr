import FarmRepository from "@/lib/application/repositories/FarmRepository";
import { Farm } from "@/lib/domain/Farm";
import { FarmAdapter } from "../databases/prisma/adapters/FarmAdapter";
import prisma from "../databases/prisma/client";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export default class FarmRepositoryPrisma implements FarmRepository {
  async save(farm: Farm): Promise<Farm> {
    try {
      let farmSaved = await prisma.farm.create({
        data: {
          uuid: farm.uuid,
          name: farm.name,
          latitude: farm.latitude,
          longitude: farm.longitude,
        },
        include: {
          windTurbines: true,
        },
      });
      return FarmAdapter.toModel(farmSaved);
    } catch (error) {
      throw new Error("Error on create farm.");
    }
  }
  async getById(farmId: string): Promise<Farm | null> {
    try {
      const farmEntity = await prisma.farm.findUnique({
        where: {
          uuid: farmId,
        },
        include: {
          windTurbines: true,
        },
      });

      if (!farmEntity) {
        return null;
      }

      return FarmAdapter.toModel(farmEntity);
    } catch (error) {
      throw new Error(`Error on fetch farm with Id ${farmId}`);
    }
  }
  async getByName(name: string): Promise<Farm[]> {
    try {
      const farmEntities = await prisma.farm.findMany({
        where: {
          name: name,
        },
        include: {
          windTurbines: true,
        },
      });

      if (farmEntities.length === 0) {
        return [];
      }

      const farms: Farm[] = farmEntities.map((farmEntity: any) =>
        FarmAdapter.toModel(farmEntity)
      );

      return farms;
    } catch (error) {
      throw new Error(`Error on fetch farms with name ${name}`);
    }
  }
  async getAll(): Promise<Farm[]> {
    try {
      const farmEntities = await prisma.farm.findMany({
        include: {
          windTurbines: true,
        },
      });

      if (farmEntities.length === 0) {
        return [];
      }

      const farms: Farm[] = farmEntities.map((farmEntity: any) =>
        FarmAdapter.toModel(farmEntity)
      );
      console.log("IN TRY");
      return farms;
    } catch (error) {
      console.log("ERRORRRRR", error);
      throw new Error("Error on fetch farms");
    }
  }
  async delete(farm: Farm): Promise<string | null> {
    try {
      let farmDeleted = await prisma.farm.delete({
        where: {
          name: farm.name,
          uuid: farm.uuid,
        },
      });

      if (!farmDeleted) {
        return null;
      }

      return farmDeleted.uuid;
    } catch (error) {
      throw new Error("Error on delete farm.");
    }
  }
}
