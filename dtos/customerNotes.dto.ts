import { IsString, IsInt } from "class-validator"

export class CreateCustomerNoteDTO {
    @IsInt()
    public id: number

    @IsInt()
    public customerId: number

    @IsString()
    public note: string
}