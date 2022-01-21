import { IsString, IsInt, IsEmail } from "class-validator";

export class CreateUserDTO {
    @IsInt()
    public id: number

    @IsString()
    public first_name: string;

    @IsString()
    public last_name: string;

    @IsString()
    @IsEmail()
    public email: string;

    @IsString()
    public password: string;

    @IsString()
    public role: string;
}