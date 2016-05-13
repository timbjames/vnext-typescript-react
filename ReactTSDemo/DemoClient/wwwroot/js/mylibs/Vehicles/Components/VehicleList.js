System.register(['react'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var react_1, React;
    var Vehiclelist;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
                React = react_1_1;
            }],
        execute: function() {
            Vehiclelist = (function (_super) {
                __extends(Vehiclelist, _super);
                function Vehiclelist() {
                    _super.apply(this, arguments);
                    this.getVehicles = function (vehicles) {
                        if (!vehicles || vehicles && vehicles.length === 0) {
                            return null;
                        }
                        return vehicles.map(function (vehicle, index) {
                            return (React.createElement("div", {key: index, className: "vehicle"}, React.createElement("ul", null, React.createElement("li", null, "Make: ", vehicle.make))));
                        });
                    };
                }
                Vehiclelist.prototype.componentDidMount = function () {
                    var _a = this.props, dispatch = _a.dispatch, vehicleActions = _a.vehicleActions;
                    dispatch(vehicleActions.getVehiclesAsync());
                };
                Vehiclelist.prototype.render = function () {
                    var _a = this.props, dispatch = _a.dispatch, vehicleActions = _a.vehicleActions, vehicles = _a.vehicles;
                    var vehicleList = this.getVehicles(vehicles);
                    return (React.createElement("div", {className: "vehicles"}, vehicleList));
                };
                return Vehiclelist;
            }(react_1.Component));
            exports_1("default", Vehiclelist);
        }
    }
});

//# sourceMappingURL=../../../maps/Vehicles/Components/VehicleList.js.map
