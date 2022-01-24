import { Model, DataTypes, Sequelize } from 'sequelize';
import { Product } from '../interfaces/product.interface';

export interface ProductAttributes {
    id: number
    item: string
    description: string
    cost: number
    price: number
    on_hand: number
    product_status: string
}


export class Products extends Model<Product, ProductAttributes> implements ProductAttributes {
    id!: number
    item!: string
    description!: string
    cost!: number
    price!: number
    on_hand!: number
    product_status!: string
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
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        on_hand: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ["out of stock", "in stock", "running low"]
        }
    }, {
        sequelize,
        modelName: 'products'
    })
    return Products
}