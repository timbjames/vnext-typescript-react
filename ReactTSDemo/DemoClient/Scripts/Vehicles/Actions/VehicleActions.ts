// 3rd party references
import { createAction } from 'redux-actions';

// Interface references
import { IVehicle } from '../../Interfaces/IndexOfInterfaces';

// Utility references
import { AjaxInfoHelper } from '../../Utility/IndexOfHelpers';

// Module references
import * as types from  '../Constants/VehicleActionConstants';
import { IVehicleActions } from './IVehicleActions';
import * as VehicleActionInterfaces from './IvehicleActions';

export default class VehicleActions implements IVehicleActions {


    public getVehiclesAsync: VehicleActionInterfaces.GetVehiclesAsync = () => {
        return (dispatch: any) => {

            let url: any = {
                url: 'http://localhost:51415/api/vehicle',
                method: 'GET'
            };

            const onFulFilled = (ajaxInfo: any): void => {
                dispatch(this.updateVehicles(ajaxInfo));
            };

            const onFailed = (ajaxInfo: any): void => {

            };

            AjaxInfoHelper.realAjaxCaller(url).then(onFulFilled, onFailed);

        }
    }        

    public updateVehicles: VehicleActionInterfaces.UpdateVehicles = createAction<void>(
        types.UPDATE_VEHICLES, (newVehicles: IVehicle[]) => newVehicles
    );
}