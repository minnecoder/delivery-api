import DB from "../config/postgres-db";
import { CreateOrderItemsDTO } from "../dtos/orderItems.dto";
import { OrderItem } from "../interfaces/orderItem.interface";
import { NotFound } from "../errors/NotFound";

class OrderItemsService {
    public orderItems = DB.OrderItems

    public async findAllOrderItems(): Promise<OrderItem[]> {
        const allOrderItems: OrderItem[] = await this.orderItems.findAll()
        return allOrderItems
    }

    public async findOrderItemsById(orderItemId: number): Promise<OrderItem> {
        const singleOrderItem: OrderItem = await this.orderItems.findByPk(orderItemId)
        if (!singleOrderItem) throw new NotFound('Order Item')
        return singleOrderItem
    }

    public async createOrderItems(orderItemsData: CreateOrderItemsDTO): Promise<OrderItem> {
        const findOrderItem: OrderItem = await this.orderItems.findOne({ where: { id: orderItemsData.id } })
        if (!findOrderItem) throw new NotFound('Order Item')
        const createdOrderItemData: OrderItem = await this.orderItems.create({ ...orderItemsData })

        return createdOrderItemData
    }

    public async updateOrderItem(orderItemId: number, orderItemsData: CreateOrderItemsDTO): Promise<OrderItem> {
        const findOrderItem: OrderItem = await this.orderItems.findByPk(orderItemId)
        if (!findOrderItem) throw new NotFound('Order Item')
        await this.orderItems.update({ ...orderItemsData }, { where: { id: orderItemId } })

        const updatedOrderItems: OrderItem = await this.orderItems.findByPk(orderItemId)

        return updatedOrderItems
    }

    public async deleteOrderItem(orderItemsId: number): Promise<OrderItem> {
        const findOrderItem: OrderItem = await this.orderItems.findByPk(orderItemsId)
        if (!findOrderItem) throw new NotFound('Order Item')
        await this.orderItems.destroy({ where: { id: orderItemsId } })

        return findOrderItem
    }
}

export default OrderItemsService