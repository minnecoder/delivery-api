import DB from '../config/postgres-db'
import { CreateOrganizationDTO } from '../dtos/organization.dto'
import { Organization } from '../interfaces/organization.interface'
import { NotFound } from '../errors/NotFound'


class OrganizationService {
    public organization = DB.Organization

    public async findAllOrganization(): Promise<Organization[]> {
        const allorganization: Organization[] = await this.organization.findAll()
        return allorganization
    }

    public async findOrganizationById(organizationId: number): Promise<Organization> {
        const singleOrganization: Organization = await this.organization.findByPk(organizationId)

        if (!singleOrganization) throw new NotFound('Organization')

        return singleOrganization
    }

    public async createOrganization(organizationData: CreateOrganizationDTO): Promise<Organization> {
        const findOrganization: Organization = await this.organization.findOne({ where: { id: organizationData.id } })

        if (!findOrganization) throw new NotFound('Organization')

        const createdOrganizationData: Organization = await this.organization.create({ ...organizationData })

        return createdOrganizationData
    }


    public async updateOrganization(organizationId: number, organizationData: CreateOrganizationDTO): Promise<Organization> {
        const findOrganization: Organization = await this.organization.findOne({ where: { id: organizationData.id } })

        if (!findOrganization) throw new NotFound('Organization')

        await this.organization.update({ ...organizationData }, { where: { id: organizationId } })

        const updatedOrganization = await this.organization.findByPk(organizationId)

        return updatedOrganization
    }

    public async deleteOrganization(organizationId: number): Promise<Organization> {
        const findOrganization: Organization = await this.organization.findByPk(organizationId)

        await this.organization.destroy({ where: { id: organizationId } })

        return findOrganization
    }
}

export default OrganizationService