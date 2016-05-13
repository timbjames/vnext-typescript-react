import { combineReducers } from 'redux';

import VehicleReducer from './VehicleReducer';

const rootReducer = combineReducers({
    vehicleListState: VehicleReducer,
});

export { rootReducer };