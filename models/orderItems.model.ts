import { Model, DataTypes, Sequelize } from 'sequelize';

export interface OrderItemsAttributes {
    id: number
    order_id: number
    product_id: number
    quantity: number
}

module.exports = (sequelize: Sequelize) => {
    class OrderItems extends Model<OrderItemsAttributes> implements OrderItemsAttributes {
        id!: number
        order_id!: number
        product_id!: number
        quantity!: number

        static associate(models: any) {
            OrderItems.belongsTo(models.Orders)
            OrderItems.hasMany(models.Products)

        }
    }

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