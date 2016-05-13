System.register(['redux', './VehicleReducer'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var redux_1, VehicleReducer_1;
    var rootReducer;
    return {
        setters:[
            function (redux_1_1) {
                redux_1 = redux_1_1;
            },
            function (VehicleReducer_1_1) {
                VehicleReducer_1 = VehicleReducer_1_1;
            }],
        execute: function() {
            rootReducer = redux_1.combineReducers({
                vehicleListState: VehicleReducer_1.default,
            });
            exports_1("rootReducer", rootReducer);
        }
    }
});

//# sourceMappingURL=../../../maps/Vehicles/Reducers/RootReducer.js.map
