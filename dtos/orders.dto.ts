import { IsInt, IsString } from "class-validator"

export class CreateOrdersDTO {
    @IsInt()
    public id: number

    @IsInt()
    public customerId: number

    @IsString()
    public orderStatus: string

    @IsInt()
    public orderTotal: number

    @IsString()
    public isGrouped: string

    @IsInt()
    public previousOrderNumber: number
}