import { IsString, IsInt } from "class-validator"

export class CreateDriversDTO {
    @IsInt()
    public id: number

    @IsString()
    public first_name: string

    @IsString()
    public last_name: string

    @IsInt()
    public phone_number: number

    @IsString()
    public birthday: string

    @IsString()
    public hire_date: string

    @IsString()
    public vehicle: string
}