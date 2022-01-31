import DB from '../config/postgres-db'
import { CreateHubDTO } from '../dtos/hub.dto'
import { Hub } from '../interfaces/hub.interface'
import { NotFound } from '../errors/NotFound'


class HubService {
    public hub = DB.Hub

    public async findAllHub(): Promise<Hub[]> {
        const allhub: Hub[] = await this.hub.findAll()
        return allhub
    }

    public async findHubById(hubId: number): Promise<Hub> {
        const singleHub: Hub = await this.hub.findByPk(hubId)

        if (!singleHub) throw new NotFound('Hub')

        return singleHub
    }

    public async createHub(hubData: CreateHubDTO): Promise<Hub> {
        const findHub: Hub = await this.hub.findOne({ where: { id: hubData.id } })

        if (!findHub) throw new NotFound('Hub')

        const createdHubData: Hub = await this.hub.create({ ...hubData })

        return createdHubData
    }


    public async updateHub(hubId: number, hubData: CreateHubDTO): Promise<Hub> {
        const findHub: Hub = await this.hub.findOne({ where: { id: hubData.id } })

        if (!findHub) throw new NotFound('Hub')

        await this.hub.update({ ...hubData }, { where: { id: hubId } })

        const updatedHub = await this.hub.findByPk(hubId)

        return updatedHub
    }

    public async deleteHub(hubId: number): Promise<Hub> {
        const findHub: Hub = await this.hub.findByPk(hubId)

        await this.hub.destroy({ where: { id: hubId } })

        return findHub
    }
}

export default HubService