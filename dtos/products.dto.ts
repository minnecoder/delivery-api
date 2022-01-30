import { IsInt, IsString } from "class-validator"

export class CreateProductsDTO {
    @IsInt()
    public id: number

    @IsString()
    public item: string

    @IsString()
    public description: string

    @IsInt()
    public cost: number

    @IsInt()
    public price: number

    @IsInt()
    public onHand: number

    @IsString()
    public productStatus: string
}