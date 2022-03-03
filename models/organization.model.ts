import { Model, DataTypes, Sequelize } from "sequelize";
import { Organization } from "/interfaces/organization.interface";

class Organizations extends Model<Organization> implements Organizations {
    declare id: number
    declare name: string
    declare email: string
    declare country: string
    declare organizationAdmins: number
}

export default function (sequelize: Sequelize): typeof Organizations {
    Organizations.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        organizationAdmins: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        }
    }, {
        sequelize,
        modelName: 'organizations'
    })
    return Organizations
}