import { Model, DataTypes, Sequelize } from 'sequelize';
import { CustomerNote } from '../interfaces/customerNote.interface';

export interface CustomerNotesAttributes {
    id: number
    customer_id: number
    note: string
}

export class CustomerNotes extends Model<CustomerNote, CustomerNotesAttributes> implements CustomerNotes {
    id!: number
    customer_id!: number
    note!: string

    static associate(models: any) {
        CustomerNotes.belongsTo(models.Customers)
    }
}

export default function (sequelize: Sequelize): typeof CustomerNotes {
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