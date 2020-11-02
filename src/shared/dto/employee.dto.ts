import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { EmployeeRole } from "../constants";

export class CreateEmployeeDto {
    @IsString()
    @IsNotEmpty()
    readonly username: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;

    @IsString()
    @IsNotEmpty()
    readonly email: string;

    @IsEnum(EmployeeRole)
    role: EmployeeRole;

}

export class UpdateEmployeeDto {
    @IsString()
    @IsNotEmpty()
    readonly username?: string;

    @IsString()
    @IsNotEmpty()
    readonly password?: string;

    @IsString()
    @IsNotEmpty()
    readonly email?: string;

    @IsEnum(EmployeeRole)
    @IsNotEmpty()
    readonly role?: EmployeeRole;
}