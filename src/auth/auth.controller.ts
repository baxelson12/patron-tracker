import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { EmployeeGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
    constructor(private as: AuthService) {}


    @UseGuards(EmployeeGuard)
    @Post('login')
    async login(@Request() req) {
        return this.as.login(req.user);
    }
}
