import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
    constructor(private as: AuthService) {}


    @UseGuards(LocalGuard)
    @Post('login')
    async login(@Request() req) {
        return this.as.login(req.user);
    }
}
