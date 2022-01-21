import { NextFunction, Request, Response } from "express";
import { CreateDriverReportDTO } from "../dtos/driverReport.dto";
import { DriverReport } from '../interfaces/driverReport.interface'
import driverReportService from "../services/driverReport.service";
// TODO import service for Driver
// TODO import service for Vehicle

class DriverReportsController {
    public driverReportService = new driverReportService()

    public getDriverReports = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllDriverReports: DriverReport[] = await this.driverReportService.findAllDriverReports();

            return res.status(200).json({
                data: findAllDriverReports
            });
        } catch (error) {
            next(error);
        }
    };

    public getSingleDriverReport = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const driverReportId = Number(req.params.id)
            const findSingleDriverReportData = await this.driverReportService.findDriverReportsById(driverReportId);

            return res.status(200).json({
                data: findSingleDriverReportData
            });
        } catch (error) {
            next(error);
        }
    };

    public addDriverReport = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const driverReportData: DriverReport = req.body

            // Check if driverId is valid

            // Check if vehicle_id is valid

            const createDriverReportData: DriverReport = await this.driverReportService.createDriverReport(driverReportData);

            return res.status(200).json({
                data: createDriverReportData
            });
        } catch (error) {
            next(error);
            return res.status(500).json({ error: "Server Error" });
        }
    };

    public updateDriverReport = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const driverReportId = Number(req.params.id)
            const driverReportData: CreateDriverReportDTO = req.body
            const updateDriverReport: DriverReport = await this.driverReportService.updateDriverReport(driverReportId, driverReportData);

            return res.status(200).json({
                data: updateDriverReport
            });
        } catch (error) {
            next(error);
        }
    };

    public deleteDriverReport = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const driverReportId = Number(req.params.id)
            const deleteDriverReport = await this.driverReportService.deleteDriverReport(driverReportId);

            return res.status(200).json({
                success: true
            });
        } catch (error) {
            next(error);
        }
    };

    // public updateDR = async (req: Request, res: Response) => {
    //     try {
    //         const driverReport = await this.driverReportService.findOne({
    //             where: {
    //                 routeId: req.body.route,
    //                 date: req.body.date
    //             }
    //         });

    //         if (!driverReport) {
    //             return res.status(404).json({
    //                 success: false,
    //                 error: "Driver Report not found"
    //             });
    //         }

    //         this.driverReportService.update(req.body, {
    //             where: {
    //                 id: req.params.id
    //             }
    //         });

    //         return res.status(200).json({
    //             success: true,
    //             data: driverReport
    //         });
    //     } catch (error) {
    //         console.error(error);
    //         return res.status(500).json({ error: "Server Error" });
    //     }
    // };


}

export default DriverReportsController