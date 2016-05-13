import { IVehicle } from '../../Interfaces/IndexOfInterfaces';

type GetVehiclesAsync = () => void;
type UpdateVehicles = (newVehicles: IVehicle[]) => void;

export {
    GetVehiclesAsync,
    UpdateVehicles
}

export interface IVehicleActions {
    getVehiclesAsync: GetVehiclesAsync;
    updateVehicles: UpdateVehicles;
}
