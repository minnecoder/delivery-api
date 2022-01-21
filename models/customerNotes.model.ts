import { Model, DataTypes, Sequelize } from 'sequelize';

export interface CustomerNotesAttributes {
    id: number
    customer_id: number
    note: string
}
module.exports = (sequelize: Sequelize) => {
    class CustomerNotes extends Model<CustomerNotesAttributes> implements CustomerNotesAttributes {
        id!: number
        customer_id!: number
        note!: string

        static associate(models: any) {
            CustomerNotes.belongsTo(models.Customers)
        }
    }

    CustomerNotes.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Customer',
                key: 'id'
            }
        },
        note: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'customer_notes'
    })
    return CustomerNotes
}