import { IsInt, IsString } from 'class-validator'

export class CreateCustomerHoursDTO {
    @IsInt()
    public id!: number

    @IsInt()
    public customer_id!: number

    @IsString()
    public monday_open!: string

    @IsString()
    public monday_close!: string

    @IsString()
    public tuesday_open!: string

    @IsString()
    public tuesday_close!: string

    @IsString()
    public wednesday_open!: string

    @IsString()
    public wednesday_close!: string

    @IsString()
    public thursday_open!: string

    @IsString()
    public thursday_close!: string

    @IsString()
    public friday_open!: string

    @IsString()
    public friday_close!: string

    @IsString()
    public saturday_open!: string

    @IsString()
    public saturday_close!: string

    @IsString()
    public sunday_open!: string

    @IsString()
    public sunday_close!: string
}