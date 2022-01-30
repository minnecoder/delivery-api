import { Model, DataTypes, Sequelize } from 'sequelize';
import { Driver } from '../interfaces/driver.interface';

class Drivers extends Model<Driver> implements Drivers {
    declare id: number
    declare organizationId: number;
    declare firstName: string
    declare lastName: string
    declare addressId: number;
    declare phone: number
    declare email: string
    declare birthday: string
    declare hireDate: string
    declare team: number;
    declare vehicleId: number

}

export default function (sequelize: Sequelize): typeof Drivers {
    Drivers.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        organizationId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        addressId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: false
        },
        hireDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        team: {
            type: DataTypes.INTEGER
        },
        vehicleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'drivers'
    })
    return Drivers
}