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
    // DB connection
    TypeOrmModule.forRoot({
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [
        __dirname + '/**/**/entities/*.entity{.ts,.js}'
      ],
      synchronize: true,
    }), 
    EmployeeModule, 
    AuthModule, 
    VisitModule,
    // Serve the employee angular app
    ServeStaticModule.forRoot({
      rootPath: join(join(__dirname, 'client'))
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log()
  }
}
