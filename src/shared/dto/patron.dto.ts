import { IsNotEmpty, IsString } from "class-validator";

export class CreatePatronDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    
    @IsString()
    @IsNotEmpty()
    readonly phone: string;
}