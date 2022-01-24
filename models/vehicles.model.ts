import { Model, DataTypes, Sequelize } from 'sequelize';
import { Vehicle } from '../interfaces/vehicle.interface';

export interface VehicleAttributes {
    id: number
    vehicle_year: number
    vehicle_make: string
    vehicle_model: string
    vehicle_license_plate: string
    tab_renewal_date: string
    vehicle_status: string
}


export class Vehicles extends Model<Vehicle, VehicleAttributes> implements VehicleAttributes {
    id!: number
    vehicle_year!: number
    vehicle_make!: string
    vehicle_model!: string
    vehicle_license_plate!: string
    tab_renewal_date!: string
    vehicle_status!: string
}
export default function (sequelize: Sequelize): typeof Vehicles {
    Vehicles.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        vehicle_year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        vehicle_make: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vehicle_model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vehicle_license_plate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tab_renewal_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        vehicle_status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ["running", "being repaired"]
        }
    }, {
        sequelize,
        modelName: 'vehicles'
    })
    return Vehicles
}