import { Router } from "express";
import DriverReportController from '../controllers/driverReport.controller'
import { CreateDriverReportDTO } from "../dtos/driverReport.dto";
import { Route } from '../interfaces/route.interface'
import validationMiddleware from "../middleware/validation.middleware";

class DriverReportRoute implements Route {
    public path = '/driverreports'
    public router = Router()
    public driverReportController = new DriverReportController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.driverReportController.getDriverReports)
        this.router.get(`${this.path}/:id`, this.driverReportController.getSingleDriverReport)
        this.router.post(`${this.path}`, validationMiddleware(CreateDriverReportDTO), this.driverReportController.addDriverReport)
        this.router.put(`${this.path}`, validationMiddleware(CreateDriverReportDTO, true), this.driverReportController.updateDriverReport)
        this.router.delete(`${this.path}`, this.driverReportController.deleteDriverReport)
    }
}

export default DriverReportRoute