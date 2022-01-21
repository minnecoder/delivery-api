import { IsInt } from "class-validator"

export class CreateOrderItemsDTO {
    @IsInt()
    public id: number

    @IsInt()
    public order_id: number

    @IsInt()
    public product_id: number

    @IsInt()
    public quantity: number
}