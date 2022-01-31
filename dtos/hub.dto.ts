import { IsInt, IsString } from "class-validator";

export class CreateHubDTO {
    @IsInt()
    public id: number

    @IsString()
    public name: string

    @IsString()
    public location: string

    @IsInt()
    public addressId: number

    @IsInt()
    public teams: number
}