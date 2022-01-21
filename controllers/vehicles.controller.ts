import { NextFunction, Request, Response } from "express";
import { CreateVehiclesDTO } from "../dtos/vehicles.dto";
import { Vehicle } from "../interfaces/vehicle.interface";
import vehiclesService from "../services/vehicles.service";

class VehiclesController {
    public vehiclesService = new vehiclesService()

    public getVehicles = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllVehicles: Vehicle[] = await this.vehiclesService.findAllVehicles();

            return res.status(200).json({
                data: findAllVehicles
            });
        } catch (error) {
            next(error);
        }
    };

    public getSingleVehicle = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const vehicleId = Number(req.params.id)
            const findSingleVehicle = await this.vehiclesService.findVehicleById(vehicleId);

            return res.status(200).json({
                data: findSingleVehicle
            });
        } catch (error) {
            next(error);
        }
    };

    public addVehicle = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const vehicleData: CreateVehiclesDTO = req.body
            const createVehicle: Vehicle = await this.vehiclesService.createVehicle(vehicleData);

            return res.status(200).json({
                data: createVehicle
            });
        } catch (error) {
            next(error);
        }
    };

    // public addBulkVehicles = async (req: Request, res: Response) => {
    //     try {
    //         const vehicles = await this.vehiclesService.bulkCreate(req.body);

    //         return res.status(200).json({
    //             success: true,
    //             count: vehicles.length,
    //             data: vehicles
    //         });
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({ error: "Server Error" });
    //     }
    // };

    public updateVehicle = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const vehicleId = Number(req.params.id)
            const vehicleData: CreateVehiclesDTO = req.body
            const updateVehicle = await this.vehiclesService.updateVehicle(vehicleId, vehicleData);

            return res.status(200).json({
                data: updateVehicle
            });
        } catch (error) {
            next(error);
        }
    };

    public deleteVehicle = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const vehicleId = Number(req.params.id)
            const deleteVehicle = await this.vehiclesService.deleteVehicle(vehicleId);

            return res.status(200).json({
                success: true,
                data: deleteVehicle
            });
        } catch (error) {
            next(error);
        }
    };
}

export default VehiclesController