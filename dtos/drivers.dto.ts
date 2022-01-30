import { IsString, IsInt, IsPhoneNumber, IsEmail, IsDate } from "class-validator"

export class CreateDriversDTO {
    @IsInt()
    public id: number

    @IsInt()
    public organizationId: number

    @IsString()
    public firstName: string

    @IsString()
    public lastName: string

    @IsInt()
    public addressId: number

    @IsInt()
    @IsPhoneNumber()
    public phone: number

    @IsString()
    @IsEmail()
    public email: string

    @IsString()
    @IsDate()
    public birthday: string

    @IsString()
    @IsDate()
    public hireDate: string

    @IsInt()
    public team: number

    @IsInt()
    public vehicleId: number
}