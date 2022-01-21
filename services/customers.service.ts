import DB from '../config/postgres-db'
import { CreateCustomerDTO } from '../dtos/customers.dto'
import { Customer } from '../interfaces/customer.interface'
import { NotFound } from '../errors/NotFound'

class CustomerService {
    public customer = DB.Customers

    public async findAllCustomers(): Promise<Customer[]> {
        const allCustomers: Customer[] = await this.customer.findAll()

        return allCustomers
    }

    public async findCustomerById(customerId: number): Promise<Customer> {
        const singleCustomer: Customer = await this.customer.findByPk(customerId)

        if (!singleCustomer) throw new NotFound('Customer')

        return singleCustomer
    }

    public async createCustomer(customerData: CreateCustomerDTO): Promise<Customer> {
        const findCustomer: Customer = await this.customer.findOne({ where: { id: customerData.id } })

        if (!findCustomer) throw new NotFound('Customer')

        const createdCustomerData: Customer = await this.customer.create({ ...customerData })

        return createdCustomerData
    }

    public async updateCustomer(customerId: number, customerData: CreateCustomerDTO): Promise<Customer> {
        const findCustomer: Customer = await this.customer.findByPk(customerId)

        if (!findCustomer) throw new NotFound('Customer')

        await this.customer.update({ ...customerData }, { where: { id: customerId } })

        const updatedCustomer: Customer = await this.customer.findByPk(customerId)

        return updatedCustomer
    }

    public async deleteCustomer(customerId: number): Promise<Customer> {
        const findCustomer: Customer = await this.customer.findByPk(customerId)

        if (!findCustomer) throw new NotFound('Customer')

        await this.customer.destroy({ where: { id: customerId } })

        return findCustomer
    }
}

export default CustomerService