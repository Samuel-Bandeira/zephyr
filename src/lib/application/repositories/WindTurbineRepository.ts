import { WindTurbine } from "@/lib/domain/WindTurbine";

export default interface WindTurbineRepository {
  save(windTurbine: WindTurbine): Promise<WindTurbine>;
  getById(windTurbineId: string): Promise<WindTurbine | null>;
  getByName(name: string): Promise<WindTurbine[] | null>;
  getByLatitude(latitude: number): Promise<WindTurbine[] | null>;
  getByLongitude(longitude: number): Promise<WindTurbine[] | null>;
  getByLatitudeLongitude(
    latitude: number,
    longitude: number
  ): Promise<WindTurbine | null>;
  getAll(): Promise<WindTurbine[] | null>;
  delete(windTurbine: WindTurbine): Promise<string | null>;
}
