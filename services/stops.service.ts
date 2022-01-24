import DB from "../config/postgres-db";
import { CreateStopsDTO } from "../dtos/stops.dto";
import { Stop } from "../interfaces/stop.interface";
import { NotFound } from "../errors/NotFound";

class StopsService {
    public stops = DB.Stops

    public async findAllStops(): Promise<Stop[]> {
        const allStops: Stop[] = await this.stops.findAll()

        return allStops
    }

    public async findStopsById(notedId: number): Promise<Stop> {
        const singleCustomerNote: Stop = await this.stops.findByPk(notedId)

        if (!singleCustomerNote) throw new NotFound('Stop')

        return singleCustomerNote
    }

    public async createStops(stopsData: CreateStopsDTO): Promise<Stop> {

        const findStops: Stop = await this.stops.findOne({ where: { id: stopsData.id } })
        if (!findStops) throw new NotFound('Stop')
        const createdStopsData: Stop = await this.stops.create({ ...stopsData })

        return createdStopsData
    }

    public async updateStops(stopsId: number, stopsData: CreateStopsDTO): Promise<Stop> {
        const findStops: Stop = await this.stops.findOne({ where: { id: stopsData.id } })
        if (!findStops) throw new NotFound('Stop')
        await this.stops.update({ ...stopsData }, { where: { id: stopsId } })

        const updatedStops: Stop = await this.stops.findByPk(stopsId)

        return updatedStops
    }

    public async deleteStops(stopsId: number): Promise<Stop> {
        const findStops: Stop = await this.stops.findByPk(stopsId)
        if (!findStops) throw new NotFound('Stop')
        await this.stops.destroy({ where: { id: stopsId } })

        return findStops
    }
}

export default StopsService