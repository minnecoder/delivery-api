import { NextFunction, Request, Response } from "express";
import { CreateDriversDTO } from "../dtos/drivers.dto";
import { Driver } from '../interfaces/driver.interface'
import driverService from "../services/drivers.service";

class DriversController {
    public driverService = new driverService()

    public getDrivers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllDrivers: Driver[] = await this.driverService.findAllDrivers();

            return res.status(200).json({
                data: findAllDrivers
            });
        } catch (error) {
            next(error);
        }
    };

    public getSingleDriver = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const driverId = Number(req.params.id)
            const findSingleDriver = await this.driverService.findDriverById(driverId);

            return res.status(200).json({
                data: findSingleDriver
            });
        } catch (error) {
            next(error);
        }
    };

    public addDriver = async (req: Request, res: Response, next: NextFunction) => {
        try {

            const driverData: CreateDriversDTO = req.body
            const createDriverData = await this.driverService.createDriver(driverData);

            return res.status(200).json({
                data: createDriverData
            });
        } catch (error) {
            next(error);
        }
    };

    // public addBulkDrivers = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //         const drivers = await this.driverService.bulkCreate(req.body);

    //         return res.status(200).json({
    //             success: true,
    //             count: drivers.length,
    //             data: drivers
    //         });
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({ error: "Server Error" });
    //     }
    // };

    public updateDriver = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const driverId = Number(req.params.id)
            const driverData: CreateDriversDTO = req.body
            const updateDriver: Driver = await this.driverService.updateDriver(driverId, driverData);

            return res.status(200).json({
                data: updateDriver
            });
        } catch (error) {
            next(error);
        }
    };

    public deleteDriver = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const driverId = Number(req.params.id)
            const deleteDriver = await this.driverService.deleteDriver(driverId);

            return res.status(200).json({
                success: true,
                data: deleteDriver
            });
        } catch (error) {
            next(error);
        }
    };
}

export default DriversController