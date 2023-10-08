import { Module } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { ActivitiesService } from './activities.service';
import { WorkerController } from './worker.controller';
import { WorkerClientService } from './clients/workflow-client.service';

@Module({
  controllers: [WorkerController],
  providers: [WorkerService, ActivitiesService, WorkerClientService],
})
export class WorkerModule { }
