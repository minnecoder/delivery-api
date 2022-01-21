import DB from "../config/postgres-db";
import { CreateStopsDTO } from "../dtos/stops.dto";
import { Stops } from "../interfaces/stop.interface";
import { NotFound } from "../errors/NotFound";

class StopsService {
    public stops = DB.Stops

    public async findAllStops(): Promise<Stops[]> {
        const allStops: Stops[] = await this.stops.findAll()

        return allStops
    }

    public async findStopsById(notedId: number): Promise<Stops> {
        const singleCustomerNote: Stops = await this.stops.findByPk(notedId)

        if (!singleCustomerNote) throw new NotFound('Stop')

        return singleCustomerNote
    }

    public async createStops(stopsData: CreateStopsDTO): Promise<Stops> {

        const findStops: Stops = await this.stops.findOne({ where: { id: stopsData.id } })
        if (!findStops) throw new NotFound('Stop')
        const createdStopsData: Stops = await this.stops.create({ ...stopsData })

        return createdStopsData
    }

    public async updateStops(stopsId: number, stopsData: CreateStopsDTO): Promise<Stops> {
        const findStops: Stops = await this.stops.findOne({ where: { id: stopsData.id } })
        if (!findStops) throw new NotFound('Stop')
        await this.stops.update({ ...stopsData }, { where: { id: stopsId } })

        const updatedStops: Stops = await this.stops.findByPk(stopsId)

        return updatedStops
    }

    public async deleteStops(stopsId: number): Promise<Stops> {
        const findStops: Stops = await this.stops.findByPk(stopsId)
        if (!findStops) throw new NotFound('Stop')
        await this.stops.destroy({ where: { id: stopsId } })

        return findStops
    }
}

export default StopsService