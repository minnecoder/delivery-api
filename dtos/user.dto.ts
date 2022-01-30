import { IsString, IsInt, IsEmail } from "class-validator";

export class CreateUserDTO {
    @IsInt()
    public id: number

    @IsString()
    public firstName: string;

    @IsString()
    public lastName: string;

    @IsString()
    @IsEmail()
    public email: string;

    @IsString()
    public password: string;

    @IsString()
    public role: string;
}