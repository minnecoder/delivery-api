import { IsInt, IsString } from "class-validator"

export class CreatePackagesDTO {
    @IsInt()
    public id: number

    @IsInt()
    public order_id: number

    @IsInt()
    public order_item_id: number

    @IsInt()
    public product_id: number

    @IsString()
    public product_status: string

    @IsInt()
    public package_barcode: number
}