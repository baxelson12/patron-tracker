import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { EmployeeService } from 'src/employee/employee.service';
import { LoginDto } from 'src/shared/dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private es: EmployeeService, private js: JwtService) {}

    async validate(loginDto: LoginDto): Promise<any> {
        const employee = await this.es.findByName(loginDto.username)
        if (!employee) { throw new NotFoundException() }

        const valid = await bcrypt.compare(loginDto.password, employee.password);
        if (!valid) { throw new UnauthorizedException() }

        return employee;
    }

    async validateUser(payload: any) {
        return await this.es.findById(payload.sub);
    }

    async login(user: any) {
        const payload = { sub: user.id, username: user.username, role: user.role }
        return {
            token: this.js.sign(payload)
        };
    }
}
