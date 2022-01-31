import { Router } from "express";
import OrganizationController from "../controllers/organization.controller";
import { CreateOrganizationDTO } from "../dtos/organization.dto";
import { Route } from '../interfaces/route.interface'
import validationMiddleware from "../middleware/validation.middleware";

class OrganizationsRoute implements Route {
    public path = '/organizations'
    public router = Router()
    public organizationsController = new OrganizationController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.organizationsController.getOrganizations)
        this.router.get(`${this.path}/:id`, this.organizationsController.getSingleOrganizations)
        this.router.post(`${this.path}`, validationMiddleware(CreateOrganizationDTO), this.organizationsController.addOrganizations)
        this.router.put(`${this.path}/:id`, validationMiddleware(CreateOrganizationDTO, true), this.organizationsController.updateOrganizations)
        this.router.delete(`${this.path}/:id`, this.organizationsController.deleteOrganizations)
    }
}

export default OrganizationsRoute