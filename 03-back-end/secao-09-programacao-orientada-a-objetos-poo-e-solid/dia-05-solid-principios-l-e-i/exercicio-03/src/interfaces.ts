// ./interfaces.ts
export interface IVehicleOnlyMove {
  drive(): void;
}
export interface IVehicleOnlyFly {
  fly(): void;
}

export interface IFuturisticVehicle extends IVehicleOnlyMove, IVehicleOnlyFly {};