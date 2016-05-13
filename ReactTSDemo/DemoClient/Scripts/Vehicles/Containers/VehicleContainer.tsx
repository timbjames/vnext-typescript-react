// 3rd Party References
import { Component } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore, compose, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import * as thunk from 'redux-thunk';

// interface references
import { IVehicle } from '../../Interfaces/IndexOfInterfaces';

// module references
import { IVehicleActions } from '../Actions/IVehicleActions';
import VehicleActions from '../Actions/VehicleActions';
import VehicleList from '../Components/VehicleList';
import { rootReducer } from '../Reducers/RootReducer';

interface IVehicleContainerProps {
    dispatch: any;
    vehicleActions: IVehicleActions;
    vehicles: IVehicle[];    
}

class VehicleContainer extends Component<IVehicleContainerProps, {}>{

    render() {
        
        return (
            <VehicleList { ...this.props } />
        );
    }
}

const createStoreWithMiddlewear = applyMiddleware((thunk as any).default)(createStore);
const store: Store = createStoreWithMiddlewear(rootReducer, {});

const mapStateToProps = (state: any) => ({
    branches: state.vehicleListState.vehicles    
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatch: dispatch,
    vehicleActions: new VehicleActions()
});

var VehicleContainerApp = connect(mapStateToProps, mapDispatchToProps)(VehicleContainer);

ReactDOM.render(<Provider store={ store }><VehicleContainerApp /></Provider>, document.getElementById('mountNode'));