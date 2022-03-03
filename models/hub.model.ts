import { Model, DataTypes, Sequelize } from "sequelize";
import { Hub } from "/interfaces/hub.interface";

class Hubs extends Model<Hub> implements Hubs {
    declare id: number
    declare name: string
    declare location: string
    declare addressId: number
    declare teams: number
}

export default function (sequelize: Sequelize): typeof Hubs {
    Hubs.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false

        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        addressId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        teams: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'hubs'
    })
    return Hubs
}