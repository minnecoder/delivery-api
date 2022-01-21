import { IsInt, IsString } from "class-validator"

export class CreateProductsDTO {
    @IsInt()
    public id: number

    @IsString()
    public description: string

    @IsInt()
    public cost: number

    @IsInt()
    public price: number

    @IsInt()
    public on_hand: number

    @IsString()
    public product_status: string
}