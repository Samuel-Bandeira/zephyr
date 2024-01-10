import { WindTurbine } from "./WindTurbine";

export class Farm {
  private _name: string;
  private _uuid: string;
  private _latitude: number;
  private _longitude: number;
  private _windTurbines?: WindTurbine[];

  constructor(
    uuid: string,
    name: string,
    latitude: number,
    longitude: number,
    windTurbines?: WindTurbine[]
  ) {
    this._name = name;
    this._uuid = uuid;
    this._windTurbines = windTurbines;
    this._latitude = latitude;
    this._longitude = longitude;
  }

  public get name() {
    return this._name;
  }

  public get uuid() {
    return this._uuid;
  }

  public get latitude() {
    return this._latitude;
  }

  public get longitude() {
    return this._longitude;
  }

  public get windTurbines() {
    return this._windTurbines;
  }

  toJSON() {
    return {
      uuid: this._uuid,
      name: this._name,
      latitude: this._latitude,
      longitude: this._longitude,
      windTurbines: this._windTurbines,
    };
  }

  public get position(): {
    latitude: number | undefined;
    longitude: number | undefined;
  } {
    let latitude = this._latitude;
    let longitude = this._longitude;
    return { latitude, longitude };
  }

  public set position(position) {
    const relatedWindTurbines = this._windTurbines;
    if (!relatedWindTurbines) {
      return;
    }

    let latitudeSum = 0;
    let longitudeSum = 0;

    for (let windTurbine of relatedWindTurbines) {
      latitudeSum += windTurbine.latitude;
      longitudeSum += windTurbine.longitude;
    }

    this._latitude = latitudeSum / relatedWindTurbines.length;
    this._longitude = longitudeSum / relatedWindTurbines.length;
  }
}
