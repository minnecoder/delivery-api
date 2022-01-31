import DB from '../config/postgres-db'
import { CreateAddressesDTO } from '../dtos/address.dto'
import { Address } from '../interfaces/address.interface'
import { NotFound } from '../errors/NotFound'


class AddressService {
    public address = DB.Address

    public async findAllAddress(): Promise<Address[]> {
        const allAddress: Address[] = await this.address.findAll()
        return allAddress
    }

    public async findAddressById(addressId: number): Promise<Address> {
        const singleAddress: Address = await this.address.findByPk(addressId)

        if (!singleAddress) throw new NotFound('Address')

        return singleAddress
    }

    public async createAddress(addressData: CreateAddressesDTO): Promise<Address> {
        const findAddress: Address = await this.address.findOne({ where: { id: addressData.id } })

        if (!findAddress) throw new NotFound('Address')

        const createdAddressData: Address = await this.address.create({ ...addressData })

        return createdAddressData
    }


    public async updateAddress(addressId: number, addressData: CreateAddressesDTO): Promise<Address> {
        const findAddress: Address = await this.address.findOne({ where: { id: addressData.id } })

        if (!findAddress) throw new NotFound('Address')

        await this.address.update({ ...addressData }, { where: { id: addressId } })

        const updatedAddress = await this.address.findByPk(addressId)

        return updatedAddress
    }

    public async deleteAddress(addressId: number): Promise<Address> {
        const findAddress: Address = await this.address.findByPk(addressId)

        await this.address.destroy({ where: { id: addressId } })

        return findAddress
    }
}

export default AddressService