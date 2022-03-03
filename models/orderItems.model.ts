import { Model, DataTypes, Sequelize } from 'sequelize';
import { OrderItem } from '../interfaces/orderItem.interface';

class OrderItems extends Model<OrderItem> implements OrderItems {
    declare id: number
    declare orderId: number
    declare productId: number
    declare quantity: number

    static associate(models: any) {
        OrderItems.belongsTo(models.Orders)
        OrderItems.hasMany(models.Products)
    }
}

export default function (sequelize: Sequelize): typeof OrderItems {
    OrderItems.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'orderItems'
    })
    return OrderItems
}