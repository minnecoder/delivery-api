import { IsString, IsInt, IsEmail, IsPhoneNumber } from "class-validator";

export class CreateCustomerDTO {
    @IsInt()
    public id: number

    @IsString()
    public customerName: string

    @IsString()
    public address: string

    @IsString()
    public city: string

    @IsString()
    public state: string

    @IsString()
    public zip: string

    @IsInt()
    @IsPhoneNumber()
    public phone: string

    @IsString()
    @IsEmail()
    public email: string
}