System.register(['redux-actions', '../Constants/VehicleActionConstants'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var redux_actions_1, types;
    var initialState;
    return {
        setters:[
            function (redux_actions_1_1) {
                redux_actions_1 = redux_actions_1_1;
            },
            function (types_1) {
                types = types_1;
            }],
        execute: function() {
            initialState = {
                vehicles: [{}]
            };
            exports_1("default",redux_actions_1.handleActions((_a = {},
                _a[types.UPDATE_VEHICLES] = function (state, action) {
                    var vehicles = state.vehicles;
                    vehicles = action.payload;
                    return $.extend({}, state, { vehicles: vehicles });
                },
                _a
            ), initialState));
        }
    }
    var _a;
});

//# sourceMappingURL=../../../maps/Vehicles/Reducers/VehicleReducer.js.map
