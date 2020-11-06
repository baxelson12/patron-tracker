import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { EmployeeService } from 'src/employee/employee.service';
import { LoginDto } from 'src/auth/dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private es: EmployeeService, private js: JwtService) {}

    async validate(loginDto: LoginDto): Promise<any> {
        const user = await this.es.findByName(loginDto.username)
        if (!user) { throw new NotFoundException() }

        const valid = await bcrypt.compare(loginDto.password, user.password);
        if (!valid) { throw new UnauthorizedException() }

        return user;
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
