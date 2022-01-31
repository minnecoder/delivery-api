import { NextFunction, Request, Response } from "express";
import { CreateOrganizationDTO } from "../dtos/organization.dto";
import { Organization } from '../interfaces/organization.interface'
import organizationService from '../services/organization.service'


class OrganizationsController {
    public organizationService = new organizationService()

    public getOrganizations = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllOrganizationsData: Organization[] = await this.organizationService.findAllOrganizations();

            return res.status(200).json({
                data: findAllOrganizationsData
            });
        } catch (error) {
            next(error)
        }
    };

    public getSingleOrganizations = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const organizationId = Number(req.params.id)
            const findSingleOrganizationsData = await this.organizationService.findOrganizationsById(organizationId);

            return res.status(200).json({
                data: findSingleOrganizationsData
            });
        } catch (error) {
            next(error)
        }
    };

    public addOrganizations = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const organizationData: CreateOrganizationDTO = req.body
            const createOrganizationsData: Organization = await this.organizationService.createOrganizations(organizationData);

            return res.status(200).json({
                data: createOrganizationsData
            });
        } catch (error) {
            next(error);
        }
    };

    public updateOrganizations = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const organizationId = Number(req.params.id)
            const organizationData: CreateOrganizationDTO = req.body
            const updateOrganizations: Organization = await this.organizationService.updateOrganizations(organizationId, organizationData)

            return res.status(200).json({
                data: organizationData
            });
        } catch (error) {
            next(error);
        }
    };

    public deleteOrganizations = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const organizationId = Number(req.params.id)

            const deleteOrganizationsData = await this.organizationService.deleteOrganizations(organizationId);

            return res.status(200).json({
                success: true
            });
        } catch (error) {
            next(error);
        }
    }
}

export default OrganizationsController 