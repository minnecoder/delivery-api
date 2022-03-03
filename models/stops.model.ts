import { Model, DataTypes, Sequelize } from 'sequelize';
import { Stop } from '../interfaces/stop.interface';

class Stops extends Model<Stop> implements Stops {
    declare id: number
    declare customerId: number
    declare orderId: number
    declare vehicleId: number
    declare driverId: number
    declare isDelivered: string
    declare isSigned: string
    declare state: string
    declare reasonCode: string
    declare signerName: string
    declare startTime: string
    declare endTime: string
    declare averageTime: string
    declare isReturnStop: boolean

    static associate(models: any) {
        Stops.hasOne(models.Customers)
        Stops.hasMany(models.Orders)
        Stops.hasOne(models.Vehiclies)
        Stops.hasOne(models.Drivers)
    }
}
export default function (sequelize: Sequelize): typeof Stops {
    Stops.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        vehicleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        driverId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        isDelivered: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isSigned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        state: {
            type: DataTypes.STRING

        },
        reasonCode: {
            type: DataTypes.ENUM,
            values: [
                "Business Closed",
                "Customer Not Available",
                "Address Problem",
                "Holiday Closed",
                "Requested Re-delivery",
                "Damaged",
                "Refused By Customer",
                "Secured Building-Access Denied",
                "Undeliverable Address",
                "Ran Out Of Time",
                "Truck Breakdown",
                "Weather",
                "Placed on Wrong Truck"
            ]
        },
        signerName: {
            type: DataTypes.STRING,
        },
        startTime: {
            type: DataTypes.TIME,
        },
        endTime: {
            type: DataTypes.TIME,
        },
        averageTime: {
            type: DataTypes.STRING
        },
        isReturnStop: {
            type: DataTypes.BOOLEAN
        }
    }, {
        sequelize,
        modelName: 'stops'
    })
    return Stops
}