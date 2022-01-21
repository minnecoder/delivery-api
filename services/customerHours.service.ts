import DB from '../config/postgres-db'
import { CreateCustomerHoursDTO } from '../dtos/customerHours.dto'
import { CustomerHours } from '../interfaces/customerHours.interface'
import { NotFound } from '../errors/NotFound'


class CustomerHoursService {
    public customerHours = DB.CustomerHours

    public async findAllCustomerHours(): Promise<CustomerHours[]> {
        const allcustomerHours: CustomerHours[] = await this.customerHours.findAll()
        return allcustomerHours
    }

    public async findCustomerHoursById(customerHoursId: number): Promise<CustomerHours> {
        const singleCustomerHours: CustomerHours = await this.customerHours.findByPk(customerHoursId)

        if (!singleCustomerHours) throw new NotFound('Customer Hours')

        return singleCustomerHours
    }

    public async createCustomerHours(customerHoursData: CreateCustomerHoursDTO): Promise<CustomerHours> {
        const findCustomerHours: CustomerHours = await this.customerHours.findOne({ where: { id: customerHoursData.id } })

        if (!findCustomerHours) throw new NotFound('Customer Hours')

        const createdCustomerHoursData: CustomerHours = await this.customerHours.create({ ...customerHoursData })

        return createdCustomerHoursData
    }


    public async updateCustomerHours(customerHoursId: number, customerHoursData: CreateCustomerHoursDTO): Promise<CustomerHours> {
        const findCustomerHours: CustomerHours = await this.customerHours.findOne({ where: { id: customerHoursData.id } })

        if (!findCustomerHours) throw new NotFound('Customer Hours')

        await this.customerHours.update({ ...customerHoursData }, { where: { id: customerHoursId } })

        const updatedCustomerHours = await this.customerHours.findByPk(customerHoursId)

        return updatedCustomerHours
    }

    public async deleteCustomerHours(customerHoursId: number): Promise<CustomerHours> {
        const findCustomerHours: CustomerHours = await this.customerHours.findByPk(customerHoursId)

        await this.customerHours.destroy({ where: { id: customerHoursId } })

        return findCustomerHours
    }
}

export default CustomerHoursService