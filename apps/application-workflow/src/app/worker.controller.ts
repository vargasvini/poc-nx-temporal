import { Controller, Get, Post } from '@nestjs/common';
import { WorkerClientService } from './clients/workflow-client.service';

@Controller()
export class WorkerController {
  constructor(private readonly workerClient: WorkerClientService) { }

  @Get()
  public async run(): Promise<void> {
    return this.workerClient.run();
  }
}
