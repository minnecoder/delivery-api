import { IsInt, IsString } from "class-validator"

export class CreatePreviousSignerDTO {
    @IsInt()
    public id: number

    @IsInt()
    public customer_id: number

    @IsString()
    public first_name: string

    @IsString()
    public last_name: string
}