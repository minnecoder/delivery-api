import DB from "../config/postgres-db";
import { CreateCustomerNoteDTO } from "../dtos/customerNotes.dto";
import { CustomerNotes } from "../interfaces/customerNotes.interface";
import { NotFound } from "../errors/NotFound";


class CustomerNotesService {
    public customerNotes = DB.CustomerNotes

    public async findAllCustomerNotes(): Promise<CustomerNotes[]> {
        const allCustomerNotes: CustomerNotes[] = await this.customerNotes.findAll()

        return allCustomerNotes
    }

    public async findCustomerNotesById(notedId: number): Promise<CustomerNotes> {
        const singleCustomerNote: CustomerNotes = await this.customerNotes.findByPk(notedId)

        if (!singleCustomerNote) throw new NotFound('Customer Note')

        return singleCustomerNote
    }

    public async createCustomerNotes(customerNotesData: CreateCustomerNoteDTO): Promise<CustomerNotes> {

        const findCustomerNote: CustomerNotes = await this.customerNotes.findOne({ where: { id: customerNotesData.id } })

        if (!findCustomerNote) throw new NotFound('Customer Note')

        const createdCustomerNotesData: CustomerNotes = await this.customerNotes.create({ ...customerNotesData })

        return createdCustomerNotesData
    }

    public async updateCustomerNote(customerNotesId: number, customerNotesData: CreateCustomerNoteDTO): Promise<CustomerNotes> {
        const findCustomerNotes: CustomerNotes = await this.customerNotes.findOne({ where: { id: customerNotesData.id } })

        if (!findCustomerNotes) throw new NotFound('Customer Note')

        await this.customerNotes.update({ ...customerNotesData }, { where: { id: customerNotesId } })

        const updatedCustomerNotes: CustomerNotes = await this.customerNotes.findByPk(customerNotesId)

        return updatedCustomerNotes
    }

    public async deleteCustomerNotes(customerNotesId: number): Promise<CustomerNotes> {
        const findCustomerNotes: CustomerNotes = await this.customerNotes.findByPk(customerNotesId)

        if (!findCustomerNotes) throw new NotFound('Customer Note')

        await this.customerNotes.destroy({ where: { id: customerNotesId } })

        return findCustomerNotes
    }
}

export default CustomerNotesService