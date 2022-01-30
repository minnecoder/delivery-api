import { IsInt, IsString } from 'class-validator'

export class CreateCustomerHoursDTO {
    @IsInt()
    public id!: number

    @IsInt()
    public customerId!: number

    @IsString()
    public mondayOpen!: string

    @IsString()
    public mondayClose!: string

    @IsString()
    public tuesdayOpen!: string

    @IsString()
    public tuesdayClose!: string

    @IsString()
    public wednesdayOpen!: string

    @IsString()
    public wednesdayClose!: string

    @IsString()
    public thursdayOpen!: string

    @IsString()
    public thursdayClose!: string

    @IsString()
    public fridayOpen!: string

    @IsString()
    public fridayClose!: string

    @IsString()
    public saturdayOpen!: string

    @IsString()
    public saturdayClose!: string

    @IsString()
    public sundayOpen!: string

    @IsString()
    public sundayClose!: string
}