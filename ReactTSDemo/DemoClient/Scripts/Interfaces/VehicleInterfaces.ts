import { IClient } from './IndexOfInterfaces';

export interface IVehicle {
    make: string;
    model: string;
    derivative: string;
    fuelType: string;
    transmittionType: string;
    vendor: IClient;
}