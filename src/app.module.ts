import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { VisitModule } from './visit/visit.module';

@Module({
  imports: [TypeOrmModule.forRoot(), EmployeeModule, AuthModule, VisitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
