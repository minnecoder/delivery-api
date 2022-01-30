import { IsString, IsInt, IsEmail, IsPhoneNumber } from "class-validator";

export class CreateCustomerDTO {
    @IsInt()
    public id: number

    @IsInt()
    public organizationId: number

    @IsString()
    public name: string

    @IsString()
    public addressId: number

    @IsInt()
    @IsPhoneNumber()
    public phone: number

    @IsString()
    @IsEmail()
    public email: string
}