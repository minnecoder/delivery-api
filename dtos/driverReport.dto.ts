import { IsInt, IsString } from "class-validator"

export class CreateDriverReportDTO {
    @IsInt()
    public id: number

    @IsInt()
    public driver_id: number

    @IsInt()
    public vehicle_id: number

    @IsInt()
    public start_mileage: number

    @IsInt()
    public first_stop_mileage: number

    @IsInt()
    public last_stop_mileage: number

    @IsInt()
    public final_mileage: number

    @IsString()
    public break1_start: string

    @IsString()
    public break1_end: string

    @IsString()
    public break2_start: string

    @IsString()
    public break2_end: string

    @IsString()
    public lunch_start: string

    @IsString()
    public lunch_end: string

    @IsInt()
    public stops_completed: number

    @IsInt()
    public stops_remaining: number

    @IsInt()
    public number_signature_stops: number
}