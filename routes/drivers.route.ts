import { Router } from "express";
import DriversController from '../controllers/drivers.controller'
import { CreateDriversDTO } from "../dtos/drivers.dto";
import { Route } from '../interfaces/route.interface'
import validationMiddleware from "../middleware/validation.middleware";

class DriversRoute implements Route {
    public path = '/drivers'
    public router = Router()
    public driversController = new DriversController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.driversController.getDrivers)
        this.router.get(`${this.path}/:id`, this.driversController.getSingleDriver)
        this.router.post(`${this.path}`, validationMiddleware(CreateDriversDTO), this.driversController.addDriver)
        this.router.put(`${this.path}/:id`, validationMiddleware(CreateDriversDTO, true), this.driversController.updateDriver)
        this.router.delete(`${this.path}/:id`, this.driversController.deleteDriver)
    }
}

export default DriversRoute