import DB from '../config/postgres-db'
import { CreateCustomerHoursDTO } from '../dtos/customerHours.dto'
import { CustomerHour } from '../interfaces/customerHour.interface'
import { NotFound } from '../errors/NotFound'


class CustomerHoursService {
    public customerHours = DB.CustomerHours

    public async findAllCustomerHours(): Promise<CustomerHour[]> {
        const allcustomerHours: CustomerHour[] = await this.customerHours.findAll()
        return allcustomerHours
    }

    public async findCustomerHoursById(customerHoursId: number): Promise<CustomerHour> {
        const singleCustomerHours: CustomerHour = await this.customerHours.findByPk(customerHoursId)

        if (!singleCustomerHours) throw new NotFound('Customer Hours')

        return singleCustomerHours
    }

    public async createCustomerHours(customerHoursData: CreateCustomerHoursDTO): Promise<CustomerHour> {
        const findCustomerHours: CustomerHour = await this.customerHours.findOne({ where: { id: customerHoursData.id } })

        if (!findCustomerHours) throw new NotFound('Customer Hours')

        const createdCustomerHoursData: CustomerHour = await this.customerHours.create({ ...customerHoursData })

        return createdCustomerHoursData
    }


    public async updateCustomerHours(customerHoursId: number, customerHoursData: CreateCustomerHoursDTO): Promise<CustomerHour> {
        const findCustomerHours: CustomerHour = await this.customerHours.findOne({ where: { id: customerHoursData.id } })

        if (!findCustomerHours) throw new NotFound('Customer Hours')

        await this.customerHours.update({ ...customerHoursData }, { where: { id: customerHoursId } })

        const updatedCustomerHours = await this.customerHours.findByPk(customerHoursId)

        return updatedCustomerHours
    }

    public async deleteCustomerHours(customerHoursId: number): Promise<CustomerHour> {
        const findCustomerHours: CustomerHour = await this.customerHours.findByPk(customerHoursId)

        await this.customerHours.destroy({ where: { id: customerHoursId } })

        return findCustomerHours
    }
}

export default CustomerHoursService