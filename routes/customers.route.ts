import { Router } from "express";
import CustomerController from '../controllers/customers.controller'
import { CreateCustomerDTO } from "../dtos/customers.dto";
import { Route } from '../interfaces/route.interface'
import validationMiddleware from "../middleware/validation.middleware";

class CustomerRoute implements Route {
    public path = '/customers'
    public router = Router()
    public customerController = new CustomerController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.customerController.getCustomers)
        this.router.get(`${this.path}/:id`, this.customerController.getSingleCustomer)
        this.router.post(`${this.path}`, validationMiddleware(CreateCustomerDTO), this.customerController.addCustomer)
        this.router.put(`${this.path}/:id`, validationMiddleware(CreateCustomerDTO, true), this.customerController.updateCustomer)
        this.router.delete(`${this.path}/:id`, this.customerController.deleteCustomer)
    }
}

export default CustomerRoute