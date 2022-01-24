import { Router } from "express";
import StopsController from '../controllers/stops.controller'
import { CreateStopsDTO } from "../dtos/stops.dto";
import { Route } from '../interfaces/route.interface'
import validationMiddleware from "../middleware/validation.middleware";

class StopsRoute implements Route {
    public path = '/stops'
    public router = Router()
    public stopsController = new StopsController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.stopsController.getStops)
        this.router.get(`${this.path}/:id`, this.stopsController.getSingleStop)
        this.router.post(`${this.path}`, validationMiddleware(CreateStopsDTO), this.stopsController.addStop)
        this.router.put(`${this.path}`, validationMiddleware(CreateStopsDTO, true), this.stopsController.updateStop)
        this.router.delete(`${this.path}`, this.stopsController.deleteStop)
    }
}

export default StopsRoute