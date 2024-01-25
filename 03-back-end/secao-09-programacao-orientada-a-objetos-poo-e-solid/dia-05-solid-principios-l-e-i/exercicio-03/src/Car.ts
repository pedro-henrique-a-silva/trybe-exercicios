import { IVehicleOnlyMove } from "./interfaces";

export default class Car implements IVehicleOnlyMove {
  drive(): void { console.log('Drive a car'); }
}
