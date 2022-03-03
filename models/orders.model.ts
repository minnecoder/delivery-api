import { Model, DataTypes, Sequelize } from 'sequelize';
import { Order } from '../interfaces/order.interface';

class Orders extends Model<Order> implements Orders {
    declare id: number
    declare customerId: number
    declare orderStatus: string
    declare orderTotal: number
    declare isGrouped: string
    declare previousOrderNumber: number

    static associate(models: any) {
        Orders.belongsTo(models.Customers)
    }
}

export default function (sequelize: Sequelize): typeof Orders {
    Orders.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        orderStatus: {
            type: DataTypes.ENUM,
            allowNull: false,
            defaultValue: "created",
            values: ["created", "picked", "on truck", "delivered"]
        },
        orderTotal: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        isGrouped: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        previousOrderNumber: {
            type: DataTypes.INTEGER
        }
    }, {
        sequelize,
        modelName: 'orders'
    })
    return Orders
}