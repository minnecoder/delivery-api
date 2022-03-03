import { Model, DataTypes, Sequelize, BelongsToManyGetAssociationsMixin, BelongsToManyAddAssociationMixin, BelongsToManyHasAssociationMixin, BelongsToManyCountAssociationsMixin, BelongsToManyCreateAssociationMixin } from 'sequelize';
import { CustomerNote } from '../interfaces/customerNote.interface';
import Customers from './customers.model';

class CustomerNotes extends Model<CustomerNote> implements CustomerNotes {
    declare id: number
    declare customerId: number
    declare note: string

    static associate(models: any) {
        CustomerNotes.belongsTo(models.Customers)
    }
}

export default function (sequelize: Sequelize): typeof CustomerNotes {
    CustomerNotes.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
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


