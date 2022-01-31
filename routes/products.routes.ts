import { Router } from "express";
import ProductsController from '../controllers/products.controller'
import { CreateProductsDTO } from "../dtos/products.dto";
import { Route } from '../interfaces/route.interface'
import validationMiddleware from "../middleware/validation.middleware";

class ProductsRoute implements Route {
    public path = '/products'
    public router = Router()
    public productsController = new ProductsController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.productsController.getProducts)
        this.router.get(`${this.path}/:id`, this.productsController.getSingleProduct)
        this.router.post(`${this.path}`, validationMiddleware(CreateProductsDTO), this.productsController.addProduct)
        this.router.put(`${this.path}/:id`, validationMiddleware(CreateProductsDTO, true), this.productsController.updateProduct)
        this.router.delete(`${this.path}/:id`, this.productsController.deleteProduct)
    }
}

export default ProductsRoute