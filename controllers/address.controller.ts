import { NextFunction, Request, Response } from "express";
import { CreateAddressesDTO } from "../dtos/address.dto";
import { Address } from "../interfaces/address.interface";
import AddressService from "../services/address.service";

class AddressController {
    public addressService = new AddressService()

    public getAddresses = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllAddressesData: Address[] = await this.addressService.findAllAddress()

            return res.status(200).json({
                data: findAllAddressesData
            })
        } catch (error) {
            next(error)
        }
    }

    public getSingleAddress = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const addressId = Number(req.params.id)
            const findSingleAddressData = await this.addressService.findAddressById(addressId)

            return res.status(200).json({
                data: findSingleAddressData
            })
        } catch (error) {
            next(error)
        }
    }

    public addAddress = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const addressData: CreateAddressesDTO = req.body
            const createAddressData: Address = await this.addressService.createAddress(addressData)

            return res.status(200).json({
                data: createAddressData
            })
        } catch (error) {
            next(error)
        }
    }

    public updateAddress = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const addressId = Number(req.params.id)
            const addressData: CreateAddressesDTO = req.body
            const updateAddress: Address = await this.addressService.updateAddress(addressId, addressData)

            return res.status(200).json({
                data: updateAddress
            })
        } catch (error) {
            next(error)
        }
    }

    public deleteAddress = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const addressId = Number(req.params.id)
            const deleteAddressData = await this.addressService.deleteAddress(addressId)

            return res.status(200).json({
                data: deleteAddressData
            })
        } catch (error) {
            next(error)
        }
    }
}

export default AddressController