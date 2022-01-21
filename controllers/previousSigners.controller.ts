import { NextFunction, Request, Response } from "express";
import { CreatePreviousSignerDTO } from "../dtos/previousSigners.dto";
import { PreviousSigner } from '../interfaces/previousSigner.interface'
import previousSignerService from "../services/previousSigners.service";

class PreviousSignerController {
    public previousSignerService = new previousSignerService()

    public getPreviousSigners = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const previoussigners: PreviousSigner[] = await this.previousSignerService.findAllPreviousSigners();

            return res.status(200).json({
                data: previoussigners
            });
        } catch (error) {
            next(error);
        }
    };

    public getSinglePreviousSigner = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const previousSignersId = Number(req.params.id)
            const findSinglePreviousSigner = await this.previousSignerService.findPreviousSignerById(previousSignersId);

            return res.status(200).json({
                success: true,
                data: findSinglePreviousSigner
            });
        } catch (error) {
            next(error);
        }
    };

    public addPreviousSigner = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const previousSignerData: CreatePreviousSignerDTO = req.body
            const createPreviousSigner = await this.previousSignerService.createPreviousSigner(previousSignerData);

            return res.status(200).json({
                success: true,
                data: createPreviousSigner
            });
        } catch (error) {
            next(error);
        }
    };

    // public addBulkPreviousSigners = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //         const previoussigners = await this.previousSignerService.bulkCreate(req.body);

    //         return res.status(200).json({
    //             success: true,
    //             count: previoussigners.length,
    //             data: previoussigners
    //         });
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({ error: "Server Error" });
    //     }
    // };

    public updatePreviousSigner = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const previousSignerId = Number(req.params.id)
            const previousSignerData: PreviousSigner = req.body
            const updatePreviousSigner = await this.previousSignerService.updatePreviousSigner(previousSignerId, previousSignerData);


            return res.status(200).json({
                success: true,
                data: updatePreviousSigner
            });
        } catch (error) {
            next(error);
        }
    };

    public deletePreviousSigner = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const previousSignerId = Number(req.params.id)
            const deletePreviousSigner = await this.previousSignerService.deletePreviousSigner(previousSignerId);

            return res.status(200).json({
                success: true,
                data: deletePreviousSigner
            });
        } catch (error) {
            next(error);
        }
    };
}

export default PreviousSignerController