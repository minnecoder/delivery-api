import { Router } from "express";
import OrderItemController from '../controllers/orderItems.controller'
import { CreateOrderItemsDTO } from "../dtos/orderItems.dto";
import { Routes } from '../interfaces/routes.interface'
import validationMiddleware from "../middleware/validation.middleware";

class OrderItemRoute implements Routes {
    public path = '/orderitems'
    public router = Router()
    public orderItemController = new OrderItemController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.orderItemController.getOrderItems)
        this.router.get(`${this.path}/:id`, this.orderItemController.getSingleOrderItem)
        this.router.post(`${this.path}`, validationMiddleware(CreateOrderItemsDTO), this.orderItemController.addOrderItem)
        this.router.put(`${this.path}`, validationMiddleware(CreateOrderItemsDTO, true), this.orderItemController.updateOrderItem)
        this.router.delete(`${this.path}`, this.orderItemController.deleteOrderItem)
    }
}

export default OrderItemRoute