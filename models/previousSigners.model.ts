import { Model, DataTypes, Sequelize } from 'sequelize';
import { PreviousSigner } from '../interfaces/previousSigner.interface';

class PreviousSigners extends Model<PreviousSigner> implements PreviousSigners {
    declare id: number
    declare customerId: number
    declare firstName: string
    declare lastName: string

    static associate(models: any) {
        PreviousSigners.belongsTo(models.Customers)
    }
}

export default function (sequelize: Sequelize): typeof PreviousSigners {
    PreviousSigners.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'previous_signers'
    })
    return PreviousSigners
}