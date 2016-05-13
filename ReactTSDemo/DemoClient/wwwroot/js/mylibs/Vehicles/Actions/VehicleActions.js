System.register(['redux-actions', '../../Utility/IndexOfHelpers', '../Constants/VehicleActionConstants'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var redux_actions_1, IndexOfHelpers_1, types;
    var VehicleActions;
    return {
        setters:[
            function (redux_actions_1_1) {
                redux_actions_1 = redux_actions_1_1;
            },
            function (IndexOfHelpers_1_1) {
                IndexOfHelpers_1 = IndexOfHelpers_1_1;
            },
            function (types_1) {
                types = types_1;
            }],
        execute: function() {
            VehicleActions = (function () {
                function VehicleActions() {
                    var _this = this;
                    this.getVehiclesAsync = function () {
                        return function (dispatch) {
                            var url = {
                                url: 'http://localhost:51415/api/vehicle',
                                method: 'GET'
                            };
                            var onFulFilled = function (ajaxInfo) {
                                dispatch(_this.updateVehicles(ajaxInfo));
                            };
                            var onFailed = function (ajaxInfo) {
                            };
                            IndexOfHelpers_1.AjaxInfoHelper.realAjaxCaller(url).then(onFulFilled, onFailed);
                        };
                    };
                    this.updateVehicles = redux_actions_1.createAction(types.UPDATE_VEHICLES, function (newVehicles) { return newVehicles; });
                }
                return VehicleActions;
            }());
            exports_1("default", VehicleActions);
        }
    }
});

//# sourceMappingURL=../../../maps/Vehicles/Actions/VehicleActions.js.map
