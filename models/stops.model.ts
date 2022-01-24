import { Model, DataTypes, Sequelize } from 'sequelize';
import { Stop } from '../interfaces/stop.interface';

export interface StopAttributes {
    id: number
    customer_id: number
    order_id: number
    vehicle_id: number
    driver_id: number
    is_delivered: string
    is_signed: string
    reason_code: string
    signer_name: string
    start_time: string
    stop_time: string
}


export class Stops extends Model<Stop, StopAttributes> implements StopAttributes {
    id!: number
    customer_id!: number
    order_id!: number
    vehicle_id!: number
    driver_id!: number
    is_delivered!: string
    is_signed!: string
    reason_code!: string
    signer_name!: string
    start_time!: string
    stop_time!: string

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
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Orders',
                key: 'id'
            }
        },
        vehicle_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Vehicles',
                key: 'id'
            }
        },
        driver_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Drivers',
                key: 'id'
            }
        },
        is_delivered: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        is_signed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        reason_code: {
            type: DataTypes.ENUM,
            allowNull: false,
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
        signer_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        stop_time: {
            type: DataTypes.TIME,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'stops'
    })
    return Stops
}