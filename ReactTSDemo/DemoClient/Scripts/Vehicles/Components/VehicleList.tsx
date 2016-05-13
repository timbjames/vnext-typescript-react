// 3rd Party References
import { Component } from 'react';
import * as React from 'react';

// interface references
import { IVehicle } from '../../Interfaces/IndexOfInterfaces';

// module references
import { IVehicleActions } from '../Actions/IVehicleActions';

interface IVehicleListProps {
    dispatch: any;
    vehicleActions: IVehicleActions;
    vehicles: IVehicle[]; 
}

export default class Vehiclelist extends Component<IVehicleListProps, {}>{

    componentDidMount() {

        const { dispatch, vehicleActions } = this.props;
        dispatch(vehicleActions.getVehiclesAsync())
    }

    private getVehicles = (vehicles: IVehicle[]): JSX.Element[] => {

        if (!vehicles || vehicles && vehicles.length === 0) {
            return null;
        }

        return vehicles.map((vehicle: IVehicle, index: number) => {

            return (
                <div key={ index } className="vehicle">
                    <ul>
                        <li>Make: { vehicle.make }</li>
                    </ul>
                </div>
            );

        });

    }

    render() {

        const { dispatch, vehicleActions, vehicles } = this.props;
        const vehicleList: JSX.Element[] = this.getVehicles(vehicles);

        return (
            <div className="vehicles">
                { vehicleList }
            </div>
        );
    }
}