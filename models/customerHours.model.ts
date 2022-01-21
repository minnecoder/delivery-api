import { Model, DataTypes, Sequelize } from 'sequelize';

export interface CustomerHoursAttributes {
    id: number
    customer_id: number
    monday_open: string
    monday_close: string
    tuesday_open: string
    tuesday_close: string
    wednesday_open: string
    wednesday_close: string
    thursday_open: string
    thursday_close: string
    friday_open: string
    friday_close: string
    saturday_open: string
    saturday_close: string
    sunday_open: string
    sunday_close: string
}

module.exports = (sequelize: Sequelize) => {

    class CustomerHours extends Model<CustomerHoursAttributes> implements CustomerHoursAttributes {
        id!: number;
        customer_id!: number
        monday_open!: string
        monday_close!: string
        tuesday_open!: string
        tuesday_close!: string
        wednesday_open!: string
        wednesday_close!: string
        thursday_open!: string
        thursday_close!: string
        friday_open!: string
        friday_close!: string
        saturday_open!: string
        saturday_close!: string
        sunday_open!: string
        sunday_close!: string

        static associate(models: any) {
            CustomerHours.belongsTo(models.Customers)
        }
    }

    CustomerHours.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Customers',
                key: 'id'
            }
        },
        monday_open: {
            type: DataTypes.TIME,
            allowNull: false
        },
        monday_close: {
            type: DataTypes.TIME,
            allowNull: false
        },
        tuesday_open: {
            type: DataTypes.TIME,
            allowNull: false
        },
        tuesday_close: {
            type: DataTypes.TIME,
            allowNull: false
        },
        wednesday_open: {
            type: DataTypes.TIME,
            allowNull: false
        },
        wednesday_close: {
            type: DataTypes.TIME,
            allowNull: false
        },
        thursday_open: {
            type: DataTypes.TIME,
            allowNull: false
        },
        thursday_close: {
            type: DataTypes.TIME,
            allowNull: false
        },
        friday_open: {
            type: DataTypes.TIME,
            allowNull: false
        },
        friday_close: {
            type: DataTypes.TIME,
            allowNull: false
        },
        saturday_open: {
            type: DataTypes.TIME,
            allowNull: false
        },
        saturday_close: {
            type: DataTypes.TIME,
            allowNull: false
        },
        sunday_open: {
            type: DataTypes.TIME,
            allowNull: false
        },
        sunday_close: {
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