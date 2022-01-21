import DB from "../config/postgres-db";
import { CreateOrdersDTO } from "../dtos/orders.dto";
import { NotFound } from "../errors/NotFound";
import { Order } from "../interfaces/order.interface";

class OrdersService {
    public orders = DB.Orders

    public async findAllOrders(): Promise<Order[]> {
        const allOrders: Order[] = await this.orders.findAll()

        return allOrders
    }

    public async findOrderById(orderId: number): Promise<Order> {
        const singleOrder: Order = await this.orders.findByPk(orderId)

        if (!singleOrder) throw new NotFound('Order')

        return singleOrder
    }

    public async createOrder(orderData: CreateOrdersDTO): Promise<Order> {
        const findOrder: Order = await this.orders.findOne({ where: { id: orderData.id } })
        if (!findOrder) throw new NotFound('Order')
        const createdOrderData: Order = await this.orders.create({ ...orderData })

        return createdOrderData
    }

    public async updateOrder(orderId: number, orderData: CreateOrdersDTO): Promise<Order> {
        const findOrder: Order = await this.orders.findByPk(orderId)
        if (!findOrder) throw new NotFound('Order')
        await this.orders.update({ ...orderData }, { where: { id: orderId } })

        const updatedOrder = await this.orders.findByPk(orderId)

        return updatedOrder
    }

    public async deleteOrder(orderId: number): Promise<Order> {
        const findOrder: Order = await this.orders.findByPk(orderId)
        if (!findOrder) throw new NotFound('Order')
        await this.orders.destroy({ where: { id: orderId } })

        return findOrder
    }

}

export default OrdersService