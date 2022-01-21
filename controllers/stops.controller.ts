import { NextFunction, Request, Response } from "express";
import { CreateStopsDTO } from "../dtos/stops.dto";
import { Stops } from '../interfaces/stop.interface'
import stopService from "../services/stops.service";
// TODO import service for customer
// TODO import service for order
// TODO import service for vehicle

class StopsController {
    public stopService = new stopService()

    public getStops = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllStops: Stops[] = await this.stopService.findAllStops();

            return res.status(200).json({
                data: findAllStops
            });
        } catch (error) {
            next(error);
        }
    };

    public getSingleStop = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const stopId = Number(req.params.id)
            const findSingleStop: Stops = await this.stopService.findStopsById(stopId);

            return res.status(200).json({
                data: findSingleStop
            });
        } catch (error) {
            next(error);
        }
    };

    public addStop = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const stopData: CreateStopsDTO = req.body
            const createStop: Stops = await this.stopService.createStops(stopData);

            return res.status(200).json({
                success: true,
                data: createStop
            });
        } catch (error) {
            next(error);
        }
    };

    public updateStop = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const stopId = Number(req.params.id)
            const stopData: CreateStopsDTO = req.body
            const updateStop = await this.stopService.updateStops(stopId, stopData);

            return res.status(200).json({
                data: updateStop
            });
        } catch (error) {
            next(error);
        }
    };

    public deleteStop = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const stopId = Number(req.params.id)
            const deleteStop: Stops = await this.stopService.deleteStops(stopId);

            return res.status(200).json({
                success: true,
                data: deleteStop
            });
        } catch (error) {
            next(error);
        }
    };
}

export default StopsController