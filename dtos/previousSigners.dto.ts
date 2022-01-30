import { IsInt, IsString } from "class-validator"

export class CreatePreviousSignerDTO {
    @IsInt()
    public id: number

    @IsInt()
    public customerId: number

    @IsString()
    public firstName: string

    @IsString()
    public lastName: string
}