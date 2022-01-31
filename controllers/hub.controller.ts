import { NextFunction, Request, Response } from "express";
import { CreateHubDTO } from "../dtos/hub.dto";
import { Hub } from '../interfaces/hub.interface'
import hubService from '../services/hub.service'


class HubController {
    public hubService = new hubService()
    public getHub = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllHubData: Hub[] = await this.hubService.findAllHub();

            return res.status(200).json({
                data: findAllHubData
            });
        } catch (error) {
            next(error)
        }
    };

    public getSingleHub = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hubId = Number(req.params.id)
            const findSingleHubData = await this.hubService.findHubById(hubId);

            return res.status(200).json({
                data: findSingleHubData
            });
        } catch (error) {
            next(error)
        }
    };

    public addHub = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hubData: CreateHubDTO = req.body
            const createHubData: Hub = await this.hubService.createHub(hubData);

            return res.status(200).json({
                data: createHubData
            });
        } catch (error) {
            next(error);
        }
    };

    public updateHub = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hubId = Number(req.params.id)
            const hubData: CreateHubDTO = req.body
            const updateHub: Hub = await this.hubService.updateHub(hubId, hubData)

            return res.status(200).json({
                data: updateHub
            });
        } catch (error) {
            next(error);
        }
    };

    public deleteHub = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const hubId = Number(req.params.id)

            const deleteHubData = await this.hubService.deleteHub(hubId);

            return res.status(200).json({
                success: true
            });
        } catch (error) {
            next(error);
        }
    }
}

export default HubController 