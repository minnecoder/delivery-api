import { Model, DataTypes, Sequelize } from 'sequelize';
import { Customer } from '../interfaces/customer.interface';

export interface CustomerAttributes {
    id: number
    customer_name: string
    address: string
    city: string
    state: string
    zip: string
    phone: number
    email: string
}


export class Customers extends Model<Customer, CustomerAttributes> implements Customer {
    id!: number
    customer_name!: string
    address!: string
    city!: string
    state!: string
    zip!: string
    phone!: number
    email!: string

    static associate(models: any) {
        Customers.hasOne(models.CustomerHours)
        Customers.hasMany(models.CustomerNotes)
    }
}

export default function (sequelize: Sequelize): typeof Customers {
    Customers.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
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
