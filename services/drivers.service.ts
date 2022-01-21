import DB from "../config/postgres-db";
import { CreateDriversDTO } from "../dtos/drivers.dto";
import { Driver } from "../interfaces/driver.interface";
import { NotFound } from "../errors/NotFound";

class DriversService {
    public driver = DB.Drivers

    public async findAllDrivers(): Promise<Driver[]> {
        const allDrivers: Driver[] = await this.driver.findAll()

        return allDrivers
    }

    public async findDriverById(driverId: number): Promise<Driver> {
        const singleDriver: Driver = await this.driver.findByPk(driverId)

        if (!singleDriver) throw new NotFound('Driver')

        return singleDriver
    }

    public async createDriver(driverData: CreateDriversDTO): Promise<Driver> {
        const findDriver: Driver = await this.driver.findOne({ where: { id: driverData.id } })

        if (!findDriver) throw new NotFound('Driver')

        const createdDriverData: Driver = await this.driver.create({ ...driverData })

        return createdDriverData
    }

    public async updateDriver(driverId: number, driverData: CreateDriversDTO): Promise<Driver> {
        const findDriver: Driver = await this.driver.findByPk(driverId)

        if (!findDriver) throw new NotFound('Driver')

        await this.driver.update({ ...driverData }, { where: { id: driverId } })

        const updatedDriver: Driver = await this.driver.findByPk(driverId)

        return updatedDriver
    }

    public async deleteDriver(driverId: number): Promise<Driver> {
        const findDriver: Driver = await this.driver.findByPk(driverId)

        if (!findDriver) throw new NotFound('Driver')

        await this.driver.destroy({ where: { id: driverId } })

        return findDriver
    }
}

export default DriversService