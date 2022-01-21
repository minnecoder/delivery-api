import { NextFunction, Request, Response } from "express";
import { CreateOrderItemsDTO } from "../dtos/orderItems.dto";
import { OrderItem } from '../interfaces/orderItem.interface'
import orderItemService from "../services/orderItems.service";

class OrderItemsController {
    public orderItemService = new orderItemService()

    public getOrderItems = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllOrderitems = await this.orderItemService.findAllOrderItems();

            return res.status(200).json({
                data: findAllOrderitems
            });
        } catch (error) {
            next(error);
        }
    };

    public getSingleOrderItem = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const orderItemId = Number(req.params.id)
            const findSingleOrderItem = await this.orderItemService.findOrderItemsById(orderItemId);

            return res.status(200).json({
                success: true,
                data: findSingleOrderItem
            });
        } catch (error) {
            next(error);
        }
    };

    public addOrderItem = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const orderItemData: CreateOrderItemsDTO = req.body
            const createOrderItem = await this.orderItemService.createOrderItems(orderItemData);

            return res.status(200).json({
                data: createOrderItem
            });
        } catch (error) {
            next(error);
        }
    };

    // public addBulkorderitems = async (req: Request, res: Response) => {
    //     try {
    //         const orderitems = await this.orderItemService.bulkCreate(req.body);

    //         return res.status(200).json({
    //             success: true,
    //             count: orderitems.length,
    //             data: orderitems
    //         });
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({ error: "Server Error" });
    //     }
    // };


    public updateOrderItem = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const orderItemId = Number(req.params.id)
            const orderItemData: CreateOrderItemsDTO = req.body
            const updateOrderItem = await this.orderItemService.updateOrderItem(orderItemId, orderItemData);

            return res.status(200).json({
                data: updateOrderItem
            });
        } catch (error) {
            next(error);
        }
    };

    // @desc Delete order item
    // @route DELETE /orderitems/:id
    // @access User
    public deleteOrderItem = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const orderItemId = Number(req.params.id)
            const deletedOrderItem = await this.orderItemService.deleteOrderItem(orderItemId);

            return res.status(200).json({
                success: true,
                data: deletedOrderItem
            });
        } catch (error) {
            next(error);
        }
    };
}

export default OrderItemsController