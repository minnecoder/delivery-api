import { IsInt, IsString } from "class-validator"

export class CreateVehiclesDTO {
    @IsInt()
    public id: number

    @IsInt()
    public vehicleYear: number

    @IsString()
    public vehicleMake: string

    @IsString()
    public vehicleModel: string

    @IsString()
    public licensePlate: string

    @IsString()
    public tabRenwealDate: string

    @IsString()
    public vehicleStatus: string
}