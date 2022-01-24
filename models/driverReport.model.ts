import { Model, DataTypes, Sequelize } from 'sequelize';
import { DriverReport } from '../interfaces/driverReport.interface';

export interface DriverReportAttributes {
    id: number
    driver_id: number
    vehicle_id: number
    start_mileage: number
    first_stop_mileage: number
    last_stop_mileage: number
    final_mileage: number
    break1_start: string
    break1_end: string
    break2_start: string
    break2_end: string
    lunch_start: string
    lunch_end: string
    stops_completed: number
    stops_remaining: number
    number_signature_stops: number
}



export class DriverReports extends Model<DriverReport, DriverReportAttributes> implements DriverReport {
    id!: number
    driver_id!: number
    vehicle_id!: number
    start_mileage!: number
    first_stop_mileage!: number
    last_stop_mileage!: number
    final_mileage!: number
    break1_start!: string
    break1_end!: string
    break2_start!: string
    break2_end!: string
    lunch_start!: string
    lunch_end!: string
    stops_completed!: number
    stops_remaining!: number
    number_signature_stops!: number

    static associate(models: any) {
        DriverReports.hasMany(models.Drivers)
        DriverReports.hasMany(models.Vehicles)
    }
}

export default function (sequelize: Sequelize): typeof DriverReports {
    DriverReports.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        driver_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Drivers',
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
        start_mileage: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        first_stop_mileage: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        last_stop_mileage: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        final_mileage: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        break1_start: {
            type: DataTypes.TIME,
            allowNull: false
        },
        break1_end: {
            type: DataTypes.TIME,
            allowNull: false
        },
        break2_start: {
            type: DataTypes.TIME,
            allowNull: false
        },
        break2_end: {
            type: DataTypes.TIME,
            allowNull: false
        },
        lunch_start: {
            type: DataTypes.TIME,
            allowNull: false
        },
        lunch_end: {
            type: DataTypes.TIME,
            allowNull: false
        },
        stops_completed: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stops_remaining: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        number_signature_stops: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'driver_reports'
    })
    return DriverReports
}