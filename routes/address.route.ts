import { Router } from "express";
import AddressController from "../controllers/address.controller";
import { CreateAddressesDTO } from "../dtos/address.dto";
import { Route } from "../interfaces/route.interface";
import validationMiddleware from "../middleware/validation.middleware";

class AddressRoute implements Route {
    public path = '/addresses'
    public router = Router()
    public addressController = new AddressController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.addressController.getAddresses)
        this.router.get(`${this.path}/:id`, this.addressController.getSingleAddress)
        this.router.post(`${this.path}`, validationMiddleware(CreateAddressesDTO), this.addressController.addAddress)
        this.router.put(`${this.path}/:id`, validationMiddleware(CreateAddressesDTO, true), this.addressController.updateAddress)
        this.router.delete(`${this.path}/:id`, this.addressController.deleteAddress)
    }
}

export default AddressRoute