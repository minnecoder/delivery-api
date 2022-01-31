import { Router } from "express";
import CustomerHoursController from '../controllers/customerHours.controller'
import { CreateCustomerHoursDTO } from "../dtos/customerHours.dto";
import { Route } from '../interfaces/route.interface'
import validationMiddleware from "../middleware/validation.middleware";

class CustomerHoursRoute implements Route {
    public path = '/customerhours'
    public router = Router()
    public customerHoursController = new CustomerHoursController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.customerHoursController.getCustomerHours)
        this.router.get(`${this.path}/:id`, this.customerHoursController.getSingleCustomerHours)
        this.router.post(`${this.path}`, validationMiddleware(CreateCustomerHoursDTO), this.customerHoursController.addCustomerHours)
        this.router.put(`${this.path}/:id`, validationMiddleware(CreateCustomerHoursDTO, true), this.customerHoursController.updateCustomerHours)
        this.router.delete(`${this.path}/:id`, this.customerHoursController.deleteCustomerHours)
    }
}

export default CustomerHoursRoute