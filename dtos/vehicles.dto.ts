import { IsInt, IsString } from "class-validator"

export class CreateVehiclesDTO {
    @IsInt()
    public id: number

    @IsInt()
    public vehicle_year: number

    @IsString()
    public vehicle_make: string

    @IsString()
    public vehicle_model: string

    @IsString()
    public vehicle_license_plate: string

    @IsString()
    public vehicle_tab_date: string

    @IsString()
    public vehicle_status: string
}