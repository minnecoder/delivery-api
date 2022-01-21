import { NextFunction, Request, Response } from "express";
import { CreateOrdersDTO } from "../dtos/orders.dto";
import { Order } from '../interfaces/order.interface'
import ordersService from "../services/orders.service";
// TODO import service for Customer

class OrdersController {
    public ordersService = new ordersService()

    public getOrders = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllOrders: Order[] = await this.ordersService.findAllOrders();

            return res.status(200).json({
                data: findAllOrders
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Server Error" });
        }
    };

    public getSingleOrder = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const orderId = Number(req.params.id)
            const findSingleOrder = await this.ordersService.findOrderById(orderId);

            return res.status(200).json({
                data: findSingleOrder
            });
        } catch (error) {
            next(error);
        }
    };

    public addOrder = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const orderData: CreateOrdersDTO = req.body
            const createOrder: Order = await this.ordersService.createOrder(orderData)

            // Check if customer ID is found

            return res.status(200).json({
                success: true,
                data: createOrder
            });
        } catch (error) {
            next(error);
        }
    };

    public updateOrder = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const orderId = Number(req.params.id)
            const orderData: CreateOrdersDTO = req.body
            const updateOrder: Order = await this.ordersService.updateOrder(orderId, orderData);

            return res.status(200).json({
                data: updateOrder
            });
        } catch (error) {
            next(error);
        }
    };

    public deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const orderId = Number(req.params.id)
            const deleteOrder = await this.ordersService.deleteOrder(orderId);

            return res.status(200).json({
                success: true,
                data: deleteOrder
            });
        } catch (error) {
            next(error);
        }
    };
}

export default OrdersController