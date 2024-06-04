import { Controller, Get, Inject, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(@Inject('appService') private readonly appService: AppService) {}

  @Get()
  index(@Query('name') name: string): string {
    return this.appService.getHello(name);
  }
}