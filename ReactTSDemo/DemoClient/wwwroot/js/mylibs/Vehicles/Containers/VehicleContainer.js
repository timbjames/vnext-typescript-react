System.register(['react', 'react-dom', 'redux', 'react-redux', 'redux-thunk', '../Actions/VehicleActions', '../Components/VehicleList', '../Reducers/RootReducer'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var react_1, React, ReactDOM, redux_1, react_redux_1, thunk, VehicleActions_1, VehicleList_1, RootReducer_1;
    var VehicleContainer, createStoreWithMiddlewear, store, mapStateToProps, mapDispatchToProps, VehicleContainerApp;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
                React = react_1_1;
            },
            function (ReactDOM_1) {
                ReactDOM = ReactDOM_1;
            },
            function (redux_1_1) {
                redux_1 = redux_1_1;
            },
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            },
            function (thunk_1) {
                thunk = thunk_1;
            },
            function (VehicleActions_1_1) {
                VehicleActions_1 = VehicleActions_1_1;
            },
            function (VehicleList_1_1) {
                VehicleList_1 = VehicleList_1_1;
            },
            function (RootReducer_1_1) {
                RootReducer_1 = RootReducer_1_1;
            }],
        execute: function() {
            VehicleContainer = (function (_super) {
                __extends(VehicleContainer, _super);
                function VehicleContainer() {
                    _super.apply(this, arguments);
                }
                VehicleContainer.prototype.render = function () {
                    return (React.createElement(VehicleList_1.default, React.__spread({}, this.props)));
                };
                return VehicleContainer;
            }(react_1.Component));
            createStoreWithMiddlewear = redux_1.applyMiddleware(thunk.default)(redux_1.createStore);
            store = createStoreWithMiddlewear(RootReducer_1.rootReducer, {});
            mapStateToProps = function (state) { return ({
                branches: state.vehicleListState.vehicles
            }); };
            mapDispatchToProps = function (dispatch) { return ({
                dispatch: dispatch,
                vehicleActions: new VehicleActions_1.default()
            }); };
            VehicleContainerApp = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(VehicleContainer);
            ReactDOM.render(React.createElement(react_redux_1.Provider, {store: store}, React.createElement(VehicleContainerApp, null)), document.getElementById('mountNode'));
        }
    }
});

//# sourceMappingURL=../../../maps/Vehicles/Containers/VehicleContainer.js.map
