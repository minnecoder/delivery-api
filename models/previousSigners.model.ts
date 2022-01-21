import { Model, DataTypes, Sequelize } from 'sequelize';

export interface PreviousSignerAttributes {
    id: number
    customer_id: number
    first_name: string
    last_name: string
}

module.exports = (sequelize: Sequelize) => {

    class PreviousSigners extends Model<PreviousSignerAttributes> implements PreviousSignerAttributes {
        id!: number
        customer_id!: number
        first_name!: string
        last_name!: string

        static associate(models: any) {
            PreviousSigners.belongsTo(models.Customers)
        }
    }

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