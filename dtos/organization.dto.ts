import { IsEmail, IsInt, IsString } from "class-validator";

export class CreateOrganizationDTO {
    @IsInt()
    id: number

    @IsString()
    name: string

    @IsString()
    @IsEmail()
    email: string

    @IsString()
    country: string

    @IsInt()
    organizationAdmins: number
}