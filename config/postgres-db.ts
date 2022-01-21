import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
import CustomersModel from '../models/customers.model'
import CustomerHoursModel from '../models/customerHours.model'
import CustomerNotesModel from "../models/customerNotes.model";
import DriverReportModel from "../models/driverReport.model";
import DriversModel from "../models/drivers.model";
import OrderItemsModel from "../models/orderItems.model";
import OrdersModel from "../models/orders.model";
import PackagesModel from "../models/packages.model";
import PreviousSignersModel from "../models/previousSigners.model";
import ProductsModel from "../models/products.model";
import StopsModel from "../models/stops.model";
import UsersModel from '../models/user.model'
import VehiclesModel from "../models/vehicles.model"


dotenv.config({ path: `${__dirname}/config.env` })

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PWD,
  {
    host: process.env.POSTGRES_SERVER,
    dialect: "postgres"
  }
);

sequelize.authenticate()

const DB = {
  CustomerHours: CustomerHoursModel(sequelize),
  CustomerNotes: CustomerNotesModel(sequelize),
  Customers: CustomersModel(sequelize),
  DriverReports: DriverReportModel(sequelize),
  Drivers: DriversModel(sequelize),
  OrderItems: OrderItemsModel(sequelize),
  Orders: OrdersModel(sequelize),
  Packages: PackagesModel(sequelize),
  PreviousSigners: PreviousSignersModel(sequelize),
  Products: ProductsModel(sequelize),
  Stops: StopsModel(sequelize),
  Users: UsersModel(sequelize),
  Vehicles: VehiclesModel(sequelize),
  sequelize,
  Sequelize
}

export default DB
