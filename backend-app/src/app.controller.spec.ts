import { ClassProvider } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppServiceImpl } from './app.service.impl';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const appService: ClassProvider = {
      provide: 'appService',
      useClass: AppServiceImpl
    }

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [appService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "My name is Justin"', () => {
      expect(appController.index("Justin")).toBe('My name is Justin');
    });
  });
});
