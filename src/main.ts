import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import { join } from 'path';
import { AppModule } from './app.module';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableCors();
  
  // // Prepare the Patron SPA
  // app.useStaticAssets(join(__dirname, '../../dist/client/patron'), { prefix: '/patron-app'});
  // // Prepare the Employee SPA
  // app.useStaticAssets(join(__dirname, '../../dist/client/employee/'), { prefix: '/employee-app'});
  app.setGlobalPrefix('api')
  await app.listen(port);
  console.log(`Server running on port ${port}`);
}
bootstrap();
