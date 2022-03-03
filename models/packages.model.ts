import { Model, DataTypes, Sequelize } from 'sequelize';
import { Package } from '../interfaces/package.interface';

class Packages extends Model<Package> implements Packages {
    declare id: number
    declare orderId: number
    declare orderItemId: number
    declare productId: number
    declare packageStatus: string
    declare packageBarcode: number

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
            autoIncrement: true
        },
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        orderItemId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        packageStatus: {
            type: DataTypes.ENUM,
            allowNull: false,
            defaultValue: "not started",
            values: ["not started", "picked", "scanned", "on truck", "delivered", "damaged", "returned"]
        },
        packageBarcode: {
            type: DataTypes.INTEGER
        }
    }, {
        sequelize,
        modelName: 'packages'
    })
    return Packages
}