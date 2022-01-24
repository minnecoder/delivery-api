import { Model, DataTypes, Sequelize } from 'sequelize';
import { Package } from '../interfaces/package.interface';

export interface PackageAttributes {
    id: number
    order_id: number
    order_item_id: number
    product_id: number
    package_status: string
    package_barcode: number
}


export class Packages extends Model<Package, PackageAttributes> implements PackageAttributes {
    id!: number
    order_id!: number
    order_item_id!: number
    product_id!: number
    package_status!: string
    package_barcode!: number

    static associate(models: any) {
        Packages.belongsTo(models.Orders)
        Packages.hasMany(models.OrderItems)
        Packages.hasMany(models.Products)
    }
}
export default function (sequelize: Sequelize): typeof Packages {
    Packages.init({
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
        order_item_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'OrderItems',
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
        package_status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ["not started", "picked", "scanned", "on truck", "delivered", "damaged", "returned"]
        },
        package_barcode: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'packages'
    })
    return Packages
}