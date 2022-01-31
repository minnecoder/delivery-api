import { Router } from "express";
import HubController from "../controllers/hub.controller";
import { CreateHubDTO } from "../dtos/hub.dto";
import { Route } from "../interfaces/route.interface";
import validationMiddleware from "../middleware/validation.middleware";

class HubRoute implements Route {
    public path = '/hubs'
    public router = Router()
    public hubController = new HubController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.hubController.getHub)
        this.router.get(`${this.path}/:id`, this.hubController.getSingleHub)
        this.router.post(`${this.path}`, validationMiddleware(CreateHubDTO), this.hubController.addHub)
        this.router.put(`${this.path}/:id`, validationMiddleware(CreateHubDTO, true), this.hubController.updateHub)
        this.router.delete(`${this.path}/:id`, this.hubController.deleteHub)
    }
}

export default HubRoute