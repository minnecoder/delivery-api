import { Model, DataTypes, Sequelize } from 'sequelize';
import { Vehicle } from '../interfaces/vehicle.interface';

class Vehicles extends Model<Vehicle> implements Vehicles {
    declare id: number
    declare vehicleYear: number
    declare vehicleMake: string
    declare vehicleModel: string
    declare licensePlate: string
    declare tabRenewalDate: string
    declare vehicleStatus: string
}
export default function (sequelize: Sequelize): typeof Vehicles {
    Vehicles.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        vehicleYear: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        vehicleMake: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vehicleModel: {
            type: DataTypes.STRING,
            allowNull: false
        },
        licensePlate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tabRenewalDate: {
            type: DataTypes.DATE,
        },
        vehicleStatus: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ["operational", "being repaired", "in the lot"]
        }
    }, {
        sequelize,
        modelName: 'vehicles'
    })
    return Vehicles
}