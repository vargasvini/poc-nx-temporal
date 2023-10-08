/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from "@nestjs/common";
import { DummyInterface } from '../../../../libs/interfaces/src/lib/dummy.interface';
import axios from 'axios';

@Injectable()
export class ActivitiesService {
  private url = 'http://localhost:3000';

  public async testActivity(data: DummyInterface): Promise<string> {
    const response = await axios.post(`${this.url}/api/`, data);

    return response.data.message;
  }

  public getActivities(): Record<string, Function> {
    const properties = Object.getOwnPropertyNames(Object.getPrototypeOf(this));

    return properties
      .filter(prop => typeof this[prop] === 'function' && prop !== 'constructor')
      .reduce((acc, curr) => {
        acc[curr] = this[curr].bind(this);
        return acc;
      }, {} as Record<string, Function>);
  }

}
