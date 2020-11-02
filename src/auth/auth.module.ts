import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { EmployeeModule } from 'src/employee/employee.module';
import { jwtConstants } from 'src/shared/constants';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { EmployeeStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '10m' }
    }),
    EmployeeModule
  ],
  controllers: [AuthController],
  providers: [AuthService, EmployeeStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
