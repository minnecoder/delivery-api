import { Model, DataTypes, Sequelize } from "sequelize";
import { Address } from "/interfaces/address.interface";

class Addresses extends Model<Address> implements Address {
    declare id: number
    declare number: number
    declare street: string
    declare apartment: string
    declare suite: number
    declare city: string
    declare state: string
    declare postalCode: number
    declare country: string
}

export default function (sequelize: Sequelize): typeof Addresses {
    Addresses.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apartment: {
            type: DataTypes.STRING
        },
        suite: {
            type: DataTypes.INTEGER
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postalCode: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'addresses'
    })
    return Addresses
}