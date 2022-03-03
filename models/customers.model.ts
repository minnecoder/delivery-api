import { Model, DataTypes, Sequelize, HasManyAddAssociationMixin } from 'sequelize';
import { Customer } from '../interfaces/customer.interface';

class Customers extends Model<Customer> implements Customer {
    declare id: number
    declare organizationId: number;
    declare name: string;
    declare addressId: number;
    declare phone: number
    declare email: string

    static associate(models: any) {
        Customers.hasOne(models.CustomerHours)
        Customers.hasMany(models.CustomerNotes)
    }
}

export default function (sequelize: Sequelize): typeof Customers {
    Customers.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        organizationId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        addressId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: "customers"
    })

    return Customers
}
