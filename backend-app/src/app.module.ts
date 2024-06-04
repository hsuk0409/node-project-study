import { ClassProvider, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppServiceImpl } from './app.service.impl';

const appService: ClassProvider = {
  provide: 'appService',
  useClass: AppServiceImpl
}

@Module({
  imports: [],
  controllers: [AppController],
  providers: [appService],
})

export class AppModule {}
