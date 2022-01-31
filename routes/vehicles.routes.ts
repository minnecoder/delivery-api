import { Router } from "express";
import VehiclesController from '../controllers/vehicles.controller'
import { CreateVehiclesDTO } from "../dtos/vehicles.dto";
import { Route } from '../interfaces/route.interface'
import validationMiddleware from "../middleware/validation.middleware";

class VehiclesRoute implements Route {
    public path = '/vehicles'
    public router = Router()
    public vehiclesController = new VehiclesController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.vehiclesController.getVehicles)
        this.router.get(`${this.path}/:id`, this.vehiclesController.getSingleVehicle)
        this.router.post(`${this.path}`, validationMiddleware(CreateVehiclesDTO), this.vehiclesController.addVehicle)
        this.router.put(`${this.path}/:id`, validationMiddleware(CreateVehiclesDTO, true), this.vehiclesController.updateVehicle)
        this.router.delete(`${this.path}/:id`, this.vehiclesController.deleteVehicle)
    }
}

export default VehiclesRoute