import { Router } from "express";
import CustomerNotesController from '../controllers/customerNotes.controller'
import { CreateCustomerNoteDTO } from "../dtos/customerNotes.dto";
import { Route } from '../interfaces/route.interface'
import validationMiddleware from "../middleware/validation.middleware";

class CustomerNotesRoute implements Route {
    public path = '/customernotes'
    public router = Router()
    public customerNotesController = new CustomerNotesController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.customerNotesController.getCustomerNotes)
        this.router.get(`${this.path}/:id`, this.customerNotesController.getSingleCustomerNote)
        this.router.post(`${this.path}`, validationMiddleware(CreateCustomerNoteDTO), this.customerNotesController.addCustomerNote)
        this.router.put(`${this.path}/:id`, validationMiddleware(CreateCustomerNoteDTO, true), this.customerNotesController.updateCustomerNote)
        this.router.delete(`${this.path}/:id`, this.customerNotesController.deleteCustomerNote)
    }
}

export default CustomerNotesRoute