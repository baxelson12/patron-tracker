import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { EmployeeService } from '../employee/employee.service';
import { LoginDto } from './dto/login.dto';
import { UserNotFound, InvalidCredentials } from './exceptions/user';

@Injectable()
export class AuthService {
    constructor(private es: EmployeeService, private js: JwtService) {}

    async validate(loginDto: LoginDto): Promise<any> {
        const user = await this.es.findByName(loginDto.username)
        // If user isn't found
        if (!user) { throw UserNotFound }

        // Check password hashes
        const valid = await bcrypt.compare(loginDto.password, user.password);
        if (!valid) { throw InvalidCredentials }

        return user;
    }

    async validateUser(payload: any) {
        // sub will be id
        return await this.es.findById(payload.sub);
    }

    async login(user: any) {
        // Values to tuck into jwt
        const payload = { sub: user.id, username: user.username, role: user.role }
        return {
            token: this.js.sign(payload)
        };
    }
}
