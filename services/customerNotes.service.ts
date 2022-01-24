import DB from "../config/postgres-db";
import { CreateCustomerNoteDTO } from "../dtos/customerNotes.dto";
import { CustomerNote } from "../interfaces/customerNote.interface";
import { NotFound } from "../errors/NotFound";


class CustomerNotesService {
    public customerNotes = DB.CustomerNotes

    public async findAllCustomerNotes(): Promise<CustomerNote[]> {
        const allCustomerNotes: CustomerNote[] = await this.customerNotes.findAll()

        return allCustomerNotes
    }

    public async findCustomerNotesById(notedId: number): Promise<CustomerNote> {
        const singleCustomerNote: CustomerNote = await this.customerNotes.findByPk(notedId)

        if (!singleCustomerNote) throw new NotFound('Customer Note')

        return singleCustomerNote
    }

    public async createCustomerNotes(customerNotesData: CreateCustomerNoteDTO): Promise<CustomerNote> {

        const findCustomerNote: CustomerNote = await this.customerNotes.findOne({ where: { id: customerNotesData.id } })

        if (!findCustomerNote) throw new NotFound('Customer Note')

        const createdCustomerNotesData: CustomerNote = await this.customerNotes.create({ ...customerNotesData })

        return createdCustomerNotesData
    }

    public async updateCustomerNote(customerNotesId: number, customerNotesData: CreateCustomerNoteDTO): Promise<CustomerNote> {
        const findCustomerNotes: CustomerNote = await this.customerNotes.findOne({ where: { id: customerNotesData.id } })

        if (!findCustomerNotes) throw new NotFound('Customer Note')

        await this.customerNotes.update({ ...customerNotesData }, { where: { id: customerNotesId } })

        const updatedCustomerNotes: CustomerNote = await this.customerNotes.findByPk(customerNotesId)

        return updatedCustomerNotes
    }

    public async deleteCustomerNotes(customerNotesId: number): Promise<CustomerNote> {
        const findCustomerNotes: CustomerNote = await this.customerNotes.findByPk(customerNotesId)

        if (!findCustomerNotes) throw new NotFound('Customer Note')

        await this.customerNotes.destroy({ where: { id: customerNotesId } })

        return findCustomerNotes
    }
}

export default CustomerNotesService