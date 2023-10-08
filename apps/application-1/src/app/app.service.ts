import { Injectable } from '@nestjs/common';
import { DummyInterface } from '../../../../libs/interfaces/src/lib/interfaces';

@Injectable()
export class AppService {
  public getData(createData: DummyInterface): { message: string } {
    return ({ message: `Hello ${createData.name}` });
  }
}
