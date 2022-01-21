import DB from "../config/postgres-db";
import { CreatePreviousSignerDTO } from "../dtos/previousSigners.dto";
import { PreviousSigner } from "../interfaces/previousSigner.interface";
import { NotFound } from "../errors/NotFound";

class PreviousSignersService {
    public previousSigners = DB.PreviousSigners

    public async findAllPreviousSigners(): Promise<PreviousSigner[]> {
        const allPreviousSigners: PreviousSigner[] = await this.previousSigners.findAll()

        return allPreviousSigners
    }

    public async findPreviousSignerById(previousSignerId: number): Promise<PreviousSigner> {
        const singlePreviousSigner: PreviousSigner = await this.previousSigners.findByPk(previousSignerId)
        if (!singlePreviousSigner) throw new NotFound('Previous Signer')
        return singlePreviousSigner
    }

    public async createPreviousSigner(previousSignerData: CreatePreviousSignerDTO): Promise<PreviousSigner> {
        const findPreviousSigner: PreviousSigner = await this.previousSigners.findOne({ where: { id: previousSignerData.id } })
        if (!findPreviousSigner) throw new NotFound('Previous Signer')
        const createdPreviousSignerData: PreviousSigner = await this.previousSigners.create({ ...previousSignerData })

        return createdPreviousSignerData
    }

    public async updatePreviousSigner(previousSignerId: number, previousSignerData: CreatePreviousSignerDTO): Promise<PreviousSigner> {
        const findPreviousSigner: PreviousSigner = await this.previousSigners.findByPk(previousSignerId)
        if (!findPreviousSigner) throw new NotFound('Previous Signer')
        await this.previousSigners.update({ ...previousSignerData }, { where: { id: previousSignerId } })
        const updatedPreviousSigner: PreviousSigner = await this.previousSigners.findByPk(previousSignerId)

        return updatedPreviousSigner
    }

    public async deletePreviousSigner(previousSignerId: number): Promise<PreviousSigner> {
        const findPreviousSigner: PreviousSigner = await this.previousSigners.findByPk(previousSignerId)
        if (!findPreviousSigner) throw new NotFound('Previous Signer')
        await this.previousSigners.destroy({ where: { id: previousSignerId } })

        return findPreviousSigner
    }

}

export default PreviousSignersService