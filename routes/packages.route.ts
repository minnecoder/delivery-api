import { Router } from "express";
import PackagesController from '../controllers/packages.controller'
import { CreatePackagesDTO } from "../dtos/packages.dto";
import { Route } from '../interfaces/route.interface'
import validationMiddleware from "../middleware/validation.middleware";

class PackagesRoute implements Route {
    public path = '/packages'
    public router = Router()
    public packagesController = new PackagesController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.packagesController.getPackages)
        this.router.get(`${this.path}/:id`, this.packagesController.getSinglePackage)
        this.router.post(`${this.path}`, validationMiddleware(CreatePackagesDTO), this.packagesController.addPackage)
        this.router.put(`${this.path}`, validationMiddleware(CreatePackagesDTO, true), this.packagesController.updatePackage)
        this.router.delete(`${this.path}`, this.packagesController.deletePackage)
    }
}

export default PackagesRoute