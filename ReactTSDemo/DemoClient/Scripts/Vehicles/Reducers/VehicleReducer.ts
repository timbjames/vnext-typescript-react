// 3rd party references
import { handleActions, Action } from 'redux-actions';

// interface references
import { IVehicle } from '../../Interfaces/IndexOfInterfaces';

// module references
import * as types from '../Constants/VehicleActionConstants';

const initialState = {
    vehicles: [{}]
}

export default handleActions<any>({

    [types.UPDATE_VEHICLES]: (state: any, action: Action): any => {

        let vehicles: IVehicle[] = state.vehicles;
        vehicles = action.payload;

        return $.extend({}, state, { vehicles });

    }

}, initialState);