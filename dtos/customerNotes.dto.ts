import { IsString, IsInt } from "class-validator"

export class CreateCustomerNoteDTO {
    @IsInt()
    public id: number

    @IsInt()
    public customer_id: number

    @IsString()
    public note: string
}