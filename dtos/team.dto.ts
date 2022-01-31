import { IsInt, IsString } from "class-validator";

export class CreateTeamDTO {
    @IsInt()
    id: number

    @IsString()
    name: string

    @IsInt()
    workers: number

    @IsInt()
    managers: number

    @IsInt()
    hubId: number
}