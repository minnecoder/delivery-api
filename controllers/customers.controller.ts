import { NextFunction, Request, Response } from "express";
import { CreateCustomerDTO } from "../dtos/customers.dto";
import { Customer } from '../interfaces/customer.interface'
import customerService from "../services/customers.service";

class CustomersController {
    public customerService = new customerService()

    public getCustomers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllCustomersData: Customer[] = await this.customerService.findAllCustomers();

            return res.status(200).json({
                data: findAllCustomersData
            });
        } catch (error) {
            next(error);
        }
    };

    public getSingleCustomer = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const customerId = Number(req.params.id)
            const findSingleCustomerData = await this.customerService.findCustomerById(customerId);

            return res.status(200).json({
                data: findSingleCustomerData
            });
        } catch (error) {
            next(error);
        }
    };
    // DONE UP TO HERE!!!!
    public addCustomer = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const customerData: CreateCustomerDTO = req.body
            const createCustomerData: Customer = await this.customerService.createCustomer(customerData);

            // create new previous signers entry

            // create new customer notes entry

            // create new customer hours entry

            return res.status(200).json({
                data: createCustomerData
            });
        } catch (error) {
            next(error);
        }
    };

    // public addBulkCustomers = async (req: Request, res: Response) => {
    //     try {
    //         const customers = await this.customerService.bulkCreate(req.body);

    //         return res.status(200).json({
    //             success: true,
    //             count: customers.length,
    //             data: customers
    //         });
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({ error: "Server Error" });
    //     }
    // };

    public updateCustomer = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const customerId = Number(req.params.id)
            const customerData: CreateCustomerDTO = req.body
            const updateCustomer: Customer = await this.customerService.updateCustomer(customerId, customerData);

            return res.status(200).json({
                success: true,
                data: updateCustomer
            });
        } catch (error) {
            next(error);
        }
    };

    public deleteCustomer = async (req: Request, res: Response, next: NextFunction) => {
        try {

            const customerId = Number(req.params.id)
            const deleteCustomerData = await this.customerService.deleteCustomer(customerId);

            return res.status(200).json({
                success: true
            });
        } catch (error) {
            next(error);
        }
    };
}

export default CustomersController