import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from '../employee/employee.module';
import { Visit } from '../shared/entities/visit.entity';
import { VisitController } from './visit.controller';
import { VisitService } from './visit.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Visit]),
    EmployeeModule
  ],
  controllers: [VisitController],
  providers: [VisitService]
})
export class VisitModule {}
