import { Model, DataTypes, Sequelize } from 'sequelize';
import { OrderItem } from '../interfaces/orderItem.interface';

export interface OrderItemsAttributes {
    id: number
    order_id: number
    product_id: number
    quantity: number
}


export class OrderItems extends Model<OrderItem, OrderItemsAttributes> implements OrderItems {
    id!: number
    order_id!: number
    product_id!: number
    quantity!: number

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
            autoIncrement: true,
            allowNull: false
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Orders',
                key: 'id'
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Products',
                key: 'id'
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'order_items'
    })
    return OrderItems
}