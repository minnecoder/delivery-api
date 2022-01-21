import { Model, DataTypes, Sequelize } from 'sequelize';

export interface DriverAttributes {
    id: number
    first_name: string
    last_name: string
    phone_number: number
    birthday: string
    hire_date: string
    vehicle_type: string
}

module.exports = (sequelize: Sequelize) => {
    class Drivers extends Model<DriverAttributes> implements DriverAttributes {
        id!: number
        first_name!: string
        last_name!: string
        phone_number!: number
        birthday!: string
        hire_date!: string
        vehicle_type!: string

    }

    Drivers.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: false
        },
        hire_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        vehicle_type: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: [
                "car",
                "pickup",
                "suv",
                "van",
                "cargo van",
                "sprinter van",
                "box truck",
                "dock truck",
                "semi"
            ]
        }
    }, {
        sequelize,
        modelName: 'drivers'
    })
    return Drivers
}