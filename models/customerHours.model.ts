import { Model, DataTypes, Sequelize, BelongsToManyGetAssociationsMixin, BelongsToManyAddAssociationMixin, BelongsToManyHasAssociationMixin, BelongsToManyCountAssociationsMixin, BelongsToManyCreateAssociationMixin } from 'sequelize';
import { CustomerHour } from '../interfaces/customerHour.interface';

class CustomerHours extends Model<CustomerHour> implements CustomerHours {
    declare id: number;
    declare customerId: number
    declare mondayOpen: string
    declare mondayClose: string
    declare tuesdayOpen: string
    declare tuesdayClose: string
    declare wednesdayOpen: string
    declare wednesdayClose: string
    declare thursdayOpen: string
    declare thursdayClose: string
    declare fridayOpen: string
    declare fridayClose: string
    declare saturdayOpen: string
    declare saturdayClose: string
    declare sundayOpen: string
    declare sundayClose: string

    static associate(models: any) {
        CustomerHours.belongsTo(models.Customers)
    }
}
export default function (sequelize: Sequelize): typeof CustomerHours {

    CustomerHours.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        mondayOpen: {
            type: DataTypes.TIME,
            allowNull: false
        },
        mondayClose: {
            type: DataTypes.TIME,
            allowNull: false
        },
        tuesdayOpen: {
            type: DataTypes.TIME,
            allowNull: false
        },
        tuesdayClose: {
            type: DataTypes.TIME,
            allowNull: false
        },
        wednesdayOpen: {
            type: DataTypes.TIME,
            allowNull: false
        },
        wednesdayClose: {
            type: DataTypes.TIME,
            allowNull: false
        },
        thursdayOpen: {
            type: DataTypes.TIME,
            allowNull: false
        },
        thursdayClose: {
            type: DataTypes.TIME,
            allowNull: false
        },
        fridayOpen: {
            type: DataTypes.TIME,
            allowNull: false
        },
        fridayClose: {
            type: DataTypes.TIME,
            allowNull: false
        },
        saturdayOpen: {
            type: DataTypes.TIME,
            allowNull: false
        },
        saturdayClose: {
            type: DataTypes.TIME,
            allowNull: false
        },
        sundayOpen: {
            type: DataTypes.TIME,
            allowNull: false
        },
        sundayClose: {
            type: DataTypes.TIME,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'customer_hours',
        timestamps: true,
        underscored: true

    })


    return CustomerHours
}