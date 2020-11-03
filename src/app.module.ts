import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { VisitModule } from './visit/visit.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      extra: { ssl: true },
      url: process.env.DATABASE_URL || "postgres://user:pass@domain:5432/database",
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }), 
    EmployeeModule, 
    AuthModule, 
    VisitModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../dist/client/employee'),
      serveRoot: '/employee-app'
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../dist/client/patron'),
      serveRoot: '/patron-app'
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
