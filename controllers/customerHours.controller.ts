import { NextFunction, Request, Response } from "express";
import { CreateCustomerHoursDTO } from "../dtos/customerHours.dto";
import { CustomerHour } from '../interfaces/customerHour.interface'
import customerHoursService from '../services/customerHours.service'


class CustomerHoursController {
    public customerHoursService = new customerHoursService()

    public getCustomerHours = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllCustomerHoursData: CustomerHour[] = await this.customerHoursService.findAllCustomerHours();

            return res.status(200).json({
                data: findAllCustomerHoursData
            });
        } catch (error) {
            next(error)
        }
    };

    public getSingleCustomerHours = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const customerHoursId = Number(req.params.id)
            const findSingleCustomerHoursData = await this.customerHoursService.findCustomerHoursById(customerHoursId);

            return res.status(200).json({
                data: findSingleCustomerHoursData
            });
        } catch (error) {
            next(error)
        }
    };

    public addCustomerHours = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const customerHoursData: CreateCustomerHoursDTO = req.body
            const createCustomerHoursData: CustomerHour = await this.customerHoursService.createCustomerHours(customerHoursData);

            return res.status(200).json({
                data: createCustomerHoursData
            });
        } catch (error) {
            next(error);
        }
    };

    public updateCustomerHours = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const customerHoursId = Number(req.params.id)
            const customerHoursData: CreateCustomerHoursDTO = req.body
            const updateCustomerHours: CustomerHour = await this.customerHoursService.updateCustomerHours(customerHoursId, customerHoursData)

            return res.status(200).json({
                data: customerHoursData
            });
        } catch (error) {
            next(error);
        }
    };

    public deleteCustomerHours = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const customerHoursId = Number(req.params.id)

            const deleteCustomerHoursData = await this.customerHoursService.deleteCustomerHours(customerHoursId);

            return res.status(200).json({
                success: true
            });
        } catch (error) {
            next(error);
        }
    }
}

export default CustomerHoursController 