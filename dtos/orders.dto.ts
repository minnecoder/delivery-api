import { IsInt, IsString } from "class-validator"

export class CreateOrdersDTO {
    @IsInt()
    public id: number

    @IsInt()
    public customer_id: number

    @IsString()
    public order_status: string

    @IsInt()
    public order_total: number

    @IsString()
    public is_grouped: string

    @IsInt()
    public previous_order_number: number
}