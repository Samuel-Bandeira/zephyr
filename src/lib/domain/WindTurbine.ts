export class WindTurbine {
  private _name: string;
  private _uuid: string;
  private _latitude: number;
  private _longitude: number;
  private _farmId: string;

  constructor(
    uuid: string,
    name: string,
    latitude: number,
    longitude: number,
    farmId: string
  ) {
    this._name = name;
    this._uuid = uuid;
    this._latitude = latitude;
    this._longitude = longitude;
    this._farmId = farmId;
  }

  public get name() {
    return this._name;
  }

  public get uuid(): string {
    return this._uuid;
  }

  public get latitude(): number {
    return this._latitude;
  }

  public get longitude(): number {
    return this._longitude;
  }

  public get farmId(): string {
    return this._farmId;
  }

  public get position(): { latitude: number; longitude: number } {
    return { latitude: this._latitude, longitude: this._longitude };
  }

  toJSON() {
    return {
      uuid: this._uuid,
      name: this._name,
      latitude: this._latitude,
      longitude: this._longitude,
      farmId: this._farmId,
    };
  }
}
