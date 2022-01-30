import { IsInt, IsString } from "class-validator"

export class CreatePackagesDTO {
    @IsInt()
    public id: number

    @IsInt()
    public orderId: number

    @IsInt()
    public orderItemId: number

    @IsInt()
    public productId: number

    @IsString()
    public productStatus: string

    @IsInt()
    public packageBarcode: number
}