import { NextFunction, Request, Response } from "express";
import { CreateCustomerNoteDTO } from "../dtos/customerNotes.dto";
import { CustomerNote } from '../interfaces/customerNote.interface'
import customerNotesService from '../services/customerNotes.service'

class CustomerNotesController {
    public customerNotesService: any = new customerNotesService()

    public getCustomerNotes = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllCustomerNotesData: CustomerNote[] = await this.customerNotesService.findAllCustomerNotes();

            return res.status(200).json({
                data: findAllCustomerNotesData
            });
        } catch (error) {
            next(error);
        }
    };

    public getSingleCustomerNote = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const noteId = (req.params.id)
            const findSingleCustomerNoteData = await this.customerNotesService.findCustomerNotesById(noteId);

            return res.status(200).json({
                data: findSingleCustomerNoteData
            });
        } catch (error) {
            next(error);
        }
    };

    public addCustomerNote = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const customerNotesData: CreateCustomerNoteDTO = req.body

            const createCustomerNotesData: CustomerNote = await this.customerNotesService.createCustomerNotes(customerNotesData);

            return res.status(200).json({
                data: createCustomerNotesData
            });
        } catch (error) {
            next(error);
        }
    };

    // public addBulkCustomerNotes = async (req: Request, res: Response) => {
    //     try {
    //         const customernotes = await this.customerNotesService.bulkCreate(req.body);

    //         return res.status(200).json({
    //             success: true,
    //             count: customernotes.length,
    //             data: customernotes
    //         });
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({ error: "Server Error" });
    //     }
    // };

    public updateCustomerNote = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const customerNotesId = req.params.id
            const customerNotesData: CreateCustomerNoteDTO = req.body
            const updateCustomerNotes: CustomerNote = await this.customerNotesService.updateCustomerNotes(customerNotesId, customerNotesData);

            return res.status(200).json({
                success: true,
                data: updateCustomerNotes
            });
        } catch (error) {
            next(error);
        }
    };

    public deleteCustomerNote = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const customerNotesId = req.params.id
            const deleteCustomerNotesData = await this.customerNotesService.deleteCustomerNotes(customerNotesId);


            return res.status(200).json({
                success: true,
                data: deleteCustomerNotesData
            });
        } catch (error) {
            next(error);
        }
    }
}
export default CustomerNotesController