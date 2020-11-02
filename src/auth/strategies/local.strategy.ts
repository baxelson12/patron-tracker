import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class EmployeeStrategy extends PassportStrategy(Strategy) {
    constructor(private as: AuthService) {
        super()
    }

    async validate(username: string, password: string): Promise<any> {
        const employee = await this.as.validate({username, password});
        if (!employee) { throw new UnauthorizedException(); }

        return employee;
    }
}