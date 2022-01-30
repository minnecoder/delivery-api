import { Model, DataTypes, Sequelize } from 'sequelize';
import { DriverReport } from '../interfaces/driverReport.interface';
export class DriverReports extends Model<DriverReport> implements DriverReport {
    declare id: number
    declare driverId: number;
    declare vehicleId: number;
    declare startMileage: number;
    declare firstStopMileage: number;
    declare lastStopMileage: number;
    declare finalMileage: number;
    declare break1Start: string;
    declare break1End: string;
    declare break2Start: string;
    declare break2End: string;
    declare lunchStart: string;
    declare lunchEnd: string;
    declare stopsCompleted: number;
    declare stopsRemaining: number;
    declare numberSignatureStops: number;

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
        driverId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        vehicleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        startMileage: {
            type: DataTypes.INTEGER,
        },
        firstStopMileage: {
            type: DataTypes.INTEGER,
        },
        lastStopMileage: {
            type: DataTypes.INTEGER,
        },
        finalMileage: {
            type: DataTypes.INTEGER,
        },
        break1Start: {
            type: DataTypes.TIME,
        },
        break1End: {
            type: DataTypes.TIME,
        },
        break2Start: {
            type: DataTypes.TIME,
        },
        break2End: {
            type: DataTypes.TIME,
        },
        lunchStart: {
            type: DataTypes.TIME,
        },
        lunchEnd: {
            type: DataTypes.TIME,
        },
        stopsCompleted: {
            type: DataTypes.INTEGER,
        },
        stopsRemaining: {
            type: DataTypes.INTEGER,
        },
        numberSignatureStops: {
            type: DataTypes.INTEGER,
        }
    }, {
        sequelize,
        modelName: 'driver_reports'
    })
    return DriverReports
}