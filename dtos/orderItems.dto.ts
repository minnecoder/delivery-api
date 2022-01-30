import { IsInt } from "class-validator"

export class CreateOrderItemsDTO {
    @IsInt()
    public id: number

    @IsInt()
    public orderId: number

    @IsInt()
    public productId: number

    @IsInt()
    public quantity: number
}