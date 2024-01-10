import { Farm } from "@/lib/domain/Farm";

export default interface FarmRepository {
  save(farm: Farm): Promise<Farm>;
  getById(farmId: string): Promise<Farm | null>;
  getByName(name: string): Promise<Farm[] | null>;
  getAll(): Promise<Farm[] | null>;
  delete(farm: Farm): Promise<string | null>;
}
