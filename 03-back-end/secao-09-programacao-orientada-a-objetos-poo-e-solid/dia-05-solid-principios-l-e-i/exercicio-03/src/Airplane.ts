import { IVehicleOnlyFly } from "./interfaces";

export default class Airplane implements IVehicleOnlyFly {
  fly(): void { console.log('Flying an airplane'); }
}