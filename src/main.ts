import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import heroku_ssl_redirect from 'heroku-ssl-redirect';
import { AppModule } from './app.module';

// For heroku
const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // Validate/convert to strongly typed
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );
  // Cors for angular apps
  app.enableCors();
  // Set controller prefix since we're also serving angular apps
  app.setGlobalPrefix('api');
  // Force to ssl ???
  app.use(heroku_ssl_redirect());
  await app.listen(port);
  console.log(`Server running on port ${port}`);
}
bootstrap();
