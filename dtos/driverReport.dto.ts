import { IsInt, IsString } from "class-validator"

export class CreateDriverReportDTO {
    @IsInt()
    public id: number

    @IsInt()
    public driverId: number

    @IsInt()
    public vehicleId: number

    @IsInt()
    public startMileage: number

    @IsInt()
    public firstStopMileage: number

    @IsInt()
    public lastStopMileage: number

    @IsInt()
    public finalMileage: number

    @IsString()
    public break1Start: string

    @IsString()
    public break1End: string

    @IsString()
    public break2Start: string

    @IsString()
    public break2End: string

    @IsString()
    public lunchStart: string

    @IsString()
    public lunchEnd: string

    @IsInt()
    public stopsCompleted: number

    @IsInt()
    public stopsRemaining: number

    @IsInt()
    public numberSignatureStops: number
}