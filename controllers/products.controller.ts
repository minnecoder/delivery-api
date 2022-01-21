import { NextFunction, Request, Response } from "express";
import { CreateProductsDTO } from "../dtos/products.dto";
import { Product } from '../interfaces/product.interface'
import productService from "../services/products.service";

class ProductController {
    public productService = new productService()

    public getProducts = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllProducts: Product[] = await this.productService.findAllProducts();

            return res.status(200).json({
                data: findAllProducts
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Server Error" });
        }
    };

    public getSingleProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const productId = Number(req.params.id)
            const findSingleProduct = await this.productService.findProductById(productId);

            return res.status(200).json({
                success: true,
                data: findSingleProduct
            });
        } catch (error) {
            next(error);
        }
    };

    public addProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const productData: CreateProductsDTO = req.body

            // Check if the body of the request has data
            if (Object.keys(productData).length === 0) {
                return res.status(404).json({
                    error: "The body can not be empty"
                });
            }

            const createProduct: Product = await this.productService.createProduct(productData);

            return res.status(200).json({
                success: true,
                data: createProduct
            });
        } catch (error) {
            next(error);
        }
    };

    // public addBulkProducts = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //         const products = await this.productService.bulkCreate(req.body);

    //         return res.status(200).json({
    //             success: true,
    //             count: products.length,
    //             data: products
    //         });
    //     } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({ error: "Server Error" });
    //     }
    // };

    public updateProduct = async (req: Request, res: Response, next: NextFunction) => {
        // Check if the body of the request has data
        if (Object.keys(req.body).length === 0) {
            return res.status(404).json({
                error: "The body can not be empty"
            });
        }
        try {
            const productId = Number(req.params.id)
            const productData: CreateProductsDTO = req.body
            const updateProduct: Product = await this.productService.updateProduct(productId, productData);

            return res.status(200).json({
                success: true,
                data: updateProduct
            });
        } catch (error) {
            next(error);
        }
    };

    public deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const productId = Number(req.params.id)
            const deleteProduct = await this.productService.deleteProduct(productId);

            return res.status(200).json({
                success: true,
                data: deleteProduct
            });
        } catch (error) {
            next(error);
        }
    };
}

export default ProductController