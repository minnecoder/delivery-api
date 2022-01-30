import { Model, DataTypes, Sequelize } from 'sequelize';
import { Product } from '../interfaces/product.interface';

class Products extends Model<Product> implements Products {
    declare id: number
    declare item: string
    declare description: string
    declare cost: number
    declare price: number
    declare onHand: number
    declare productStatus: string
}

export default function (sequelize: Sequelize): typeof Products {
    Products.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        item: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cost: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        onHand: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productStatus: {
            type: DataTypes.ENUM,
            allowNull: false,
            defaultValue: "in stock",
            values: ["out of stock", "in stock", "running low"]
        }
    }, {
        sequelize,
        modelName: 'products'
    })
    return Products
}