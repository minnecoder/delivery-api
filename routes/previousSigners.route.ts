import { Router } from "express";
import PreviousSignersController from '../controllers/previousSigners.controller'
import { CreatePreviousSignerDTO } from "../dtos/previousSigners.dto";
import { Route } from '../interfaces/route.interface'
import validationMiddleware from "../middleware/validation.middleware";

class PreviousSignersRoute implements Route {
    public path = '/previoussigners'
    public router = Router()
    public previousSignersController = new PreviousSignersController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.previousSignersController.getPreviousSigners)
        this.router.get(`${this.path}/:id`, this.previousSignersController.getSinglePreviousSigner)
        this.router.post(`${this.path}`, validationMiddleware(CreatePreviousSignerDTO), this.previousSignersController.addPreviousSigner)
        this.router.put(`${this.path}/:id`, validationMiddleware(CreatePreviousSignerDTO, true), this.previousSignersController.updatePreviousSigner)
        this.router.delete(`${this.path}/:id`, this.previousSignersController.deletePreviousSigner)
    }
}

export default PreviousSignersRoute