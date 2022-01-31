import { Model, DataTypes, Sequelize } from "sequelize";
import { Team } from "/interfaces/team.interface";

class Teams extends Model<Team> implements Teams {
    declare id: number
    declare name: string
    declare workers: number
    declare managers: number
    declare hubId: number
}

export default function (sequelize: Sequelize): typeof Teams {
    Teams.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        workers: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        },
        managers: {
            type: DataTypes.INTEGER
        },
        hubId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'teams'
    })
    return Teams
}