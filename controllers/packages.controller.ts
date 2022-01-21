import { NextFunction, Request, Response } from "express";
import { CreatePackagesDTO } from "../dtos/packages.dto";
import { Package } from '../interfaces/package.interface'
import packageService from "../services/packages.service";
// TODO import service for Order
// TODO import service for Product

class PackageController {
    public packageService = new packageService()

    public getPackages = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllPackages = await this.packageService.findAllPackages();

            return res.status(200).json({
                data: findAllPackages
            });
        } catch (error) {
            next(error);
        }
    };

    public getSinglePackage = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const packageId = Number(req.params.id)
            const findSinglePackage = await this.packageService.findPackageById(packageId);

            return res.status(200).json({
                success: true,
                data: findSinglePackage
            });
        } catch (error) {
            next(error);
        }
    };

    public addPackage = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const packageData: CreatePackagesDTO = req.body
            // Check if orderID is found

            // Check if productId is valid

            const createPackages: Package = await this.packageService.createPackage(packageData);

            return res.status(200).json({
                success: true,
                data: createPackages
            });
        } catch (error) {
            next(error);
        }
    };

    public updatePackage = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const packageId = Number(req.params.id)
            const packageData: CreatePackagesDTO = req.body
            const updatePackages = await this.packageService.updatePackage(packageId, packageData);

            return res.status(200).json({
                data: updatePackages
            });
        } catch (error) {
            next(error);
        }
    };

    public deletePackage = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const packageId = Number(req.params.id)
            const deletePackage = await this.packageService.deletePackage(packageId);

            return res.status(200).json({
                success: true,
                data: deletePackage
            });
        } catch (error) {
            next(error);
        }
    };

}
export default PackageController