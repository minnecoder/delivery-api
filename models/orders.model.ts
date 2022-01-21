import { Model, DataTypes, Sequelize } from 'sequelize';

export interface OrderAttributes {
    id: number
    customer_id: number
    order_status: string
    order_total: number
    is_grouped: string
    previous_order_number: number
}


module.exports = (sequelize: Sequelize) => {
    class Orders extends Model<OrderAttributes> implements OrderAttributes {
        id!: number
        customer_id!: number
        order_status!: string
        order_total!: number
        is_grouped!: string
        previous_order_number!: number

        static associate(models: any) {
            Orders.belongsTo(models.Customers)
        }

    }

    Orders.init({
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
        order_status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ["created", "picked", "on truck", "delivered"]
        },
        order_total: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        is_grouped: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        previous_order_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'orders'
    })
    return Orders
}