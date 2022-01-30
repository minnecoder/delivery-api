import { IsInt, IsString, IsBoolean } from "class-validator"

export class CreateStopsDTO {
    @IsInt()
    public id: number

    @IsInt()
    public customerId: number

    @IsInt()
    public orderId: number

    @IsInt()
    public vehicleId: number

    @IsInt()
    public driverId: number

    @IsString()
    @IsBoolean()
    public isDelivered: string

    @IsString()
    @IsBoolean()
    public isSigned: string

    @IsString()
    public state: string

    @IsString()
    public reasonCode: string

    @IsString()
    public signerName: string

    @IsString()
    public startTime: string

    @IsString()
    public endTime: string

    @IsString()
    public averageTime: string

    @IsString()
    @IsBoolean()
    public isReturnStop: boolean
}