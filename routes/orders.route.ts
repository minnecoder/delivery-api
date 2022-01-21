import { Router } from "express";
import OrdersController from '../controllers/orders.controller'
import { CreateOrdersDTO } from "../dtos/orders.dto";
import { Routes } from '../interfaces/routes.interface'
import validationMiddleware from "../middleware/validation.middleware";

class OrdersRoute implements Routes {
    public path = '/orders'
    public router = Router()
    public ordersController = new OrdersController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.ordersController.getOrders)
        this.router.get(`${this.path}/:id`, this.ordersController.getSingleOrder)
        this.router.post(`${this.path}`, validationMiddleware(CreateOrdersDTO), this.ordersController.addOrder)
        this.router.put(`${this.path}`, validationMiddleware(CreateOrdersDTO, true), this.ordersController.updateOrder)
        this.router.delete(`${this.path}`, this.ordersController.deleteOrder)
    }
}

export default OrdersRoute