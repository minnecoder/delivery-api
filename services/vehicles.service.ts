import DB from '../config/postgres-db'
import { CreateVehiclesDTO } from '../dtos/vehicles.dto'
import { Vehicle } from '../interfaces/vehicle.interface'

class VehicleService {
    public vehicle = DB.Vehicles

    public async findAllVehicles(): Promise<Vehicle[]> {
        const allVehicles: Vehicle[] = await this.vehicle.findAll()

        return allVehicles
    }

    public async findVehicleById(vehicleId: number): Promise<Vehicle> {
        const singleVehicle: Vehicle = await this.vehicle.findByPk(vehicleId)

        return singleVehicle
    }

    public async createVehicle(vehicleData: CreateVehiclesDTO): Promise<Vehicle> {
        const findVehicle: Vehicle = await this.vehicle.findOne({ where: { id: vehicleData.id } })

        const createdVehicleData: Vehicle = await this.vehicle.create({ ...vehicleData })

        return createdVehicleData
    }

    public async updateVehicle(vehicleId: number, vehicleData: CreateVehiclesDTO): Promise<Vehicle> {
        const findVehicle: Vehicle = await this.vehicle.findByPk(vehicleId)

        await this.vehicle.update({ ...vehicleData }, { where: { id: vehicleId } })

        const updatedVehicle: Vehicle = await this.vehicle.findByPk(vehicleId)

        return updatedVehicle
    }

    public async deleteVehicle(vehicleId: number): Promise<Vehicle> {
        const findVehicle: Vehicle = await this.vehicle.findByPk(vehicleId)

        await this.vehicle.destroy({ where: { id: vehicleId } })

        return findVehicle
    }
}

export default VehicleService