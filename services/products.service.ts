import DB from '../config/postgres-db'
import { CreateProductsDTO } from '../dtos/products.dto'
import { Product } from '../interfaces/product.interface'
import { NotFound } from '../errors/NotFound'

class ProductService {
    public product = DB.Products

    public async findAllProducts(): Promise<Product[]> {
        const allProducts: Product[] = await this.product.findAll()

        return allProducts
    }

    public async findProductById(productId: number): Promise<Product> {
        const singleProduct: Product = await this.product.findByPk(productId)
        if (!singleProduct) throw new NotFound('Product')
        return singleProduct
    }

    public async createProduct(productData: CreateProductsDTO): Promise<Product> {
        const findProduct: Product = await this.product.findOne({ where: { id: productData.id } })
        if (!findProduct) throw new NotFound('Product')
        const createdProductData: Product = await this.product.create({ ...productData })

        return createdProductData
    }

    public async updateProduct(productId: number, productData: CreateProductsDTO): Promise<Product> {
        const findProduct: Product = await this.product.findByPk(productId)
        if (!findProduct) throw new NotFound('Product')
        await this.product.update({ ...productData }, { where: { id: productId } })

        const updatedProduct = await this.product.findByPk(productId)

        return updatedProduct
    }

    public async deleteProduct(productId: number): Promise<Product> {
        const findProduct: Product = await this.product.findByPk(productId)
        if (!findProduct) throw new NotFound('Product')
        await this.product.destroy({ where: { id: productId } })

        return findProduct
    }
}

export default ProductService