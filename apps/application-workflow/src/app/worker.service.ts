import { Injectable } from '@nestjs/common';
import { Worker } from '@temporalio/worker';
import { ActivitiesService } from './activities.service';
import * as path from 'path';
import appRoot from 'app-root-path';

@Injectable()
export class WorkerService {

  public constructor(private readonly activitiesService: ActivitiesService) { }

  public async run(): Promise<void> {
    const appPath = "apps\\application-workflow\\src\\app";
    const filePath = "workflows.ts";
    const workflowsPath = path.join(appRoot.path, appPath, filePath);
    const activities = this.activitiesService.getActivities();

    const worker = await Worker.create({
      workflowsPath,
      activities,
      taskQueue: 'application-tasks',
    });

    await worker.run();
  }
}
