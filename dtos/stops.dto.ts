import { IsInt, IsString, IsBoolean } from "class-validator"

export class CreateStopsDTO {
    @IsInt()
    public id: number

    @IsInt()
    public customer_id: number

    @IsInt()
    public order_id: number

    @IsInt()
    public vehicle_id: number

    @IsInt()
    public driver_id: number

    @IsString()
    @IsBoolean()
    public is_delivered: string

    @IsString()
    @IsBoolean()
    public is_signed: string

    @IsString()
    public reason_code: string

    @IsString()
    public signer_name: string

    @IsString()
    public start_time: string

    @IsString()
    public stop_time: string
}