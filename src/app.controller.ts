import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('patron-app')
  sendPatronApplication(@Res() res) {
    res.sendFile('index.html', {
      root: 'dist/client/patron'
    })
  }
}
