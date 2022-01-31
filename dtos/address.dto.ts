import { IsInt, IsString } from "class-validator";

export class CreateAddressesDTO {
    @IsInt()
    public id: number

    @IsInt()
    public number: number

    @IsString()
    public street: string

    @IsString()
    public apartment: string

    @IsInt()
    public suite: number

    @IsString()
    public city: string

    @IsString()
    public state: string

    @IsInt()
    public postalCode: number

    @IsString()
    public country: string
}