import { Body, Controller, Post } from '@nestjs/common';
import { DummyInterface } from '../../../../libs/interfaces/src/lib/dummy.interface';


import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  public getData(@Body() data: DummyInterface) {
    return this.appService.getData(data);
  }
}
