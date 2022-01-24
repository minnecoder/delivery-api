import { Model, DataTypes, Sequelize } from 'sequelize';
import { PreviousSigner } from '../interfaces/previousSigner.interface';

export interface PreviousSignerAttributes {
    id: number
    customer_id: number
    first_name: string
    last_name: string
}

export class PreviousSigners extends Model<PreviousSigner, PreviousSignerAttributes> implements PreviousSignerAttributes {
    id!: number
    customer_id!: number
    first_name!: string
    last_name!: string

    static associate(models: any) {
        PreviousSigners.belongsTo(models.Customers)
    }
}

export default function (sequelize: Sequelize): typeof PreviousSigners {
    PreviousSigners.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Customers',
                key: 'id'
            }

        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false

        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'previous_signers'
    })
    return PreviousSigners
}