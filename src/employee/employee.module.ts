import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConstants } from '../shared/constants';
import { Employee } from '../shared/entities/employee.entity';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee]),
    // Reregister module so we can decode jwts
    JwtModule.register({
      secret: jwtConstants.secret
    })
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
  exports: [EmployeeService]
})
export class EmployeeModule {}
