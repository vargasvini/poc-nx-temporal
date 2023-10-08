import { proxyActivities } from '@temporalio/workflow';
import { ActivitiesService } from './activities.service';
import { DummyInterface } from '../../../../libs/interfaces/src/lib/interfaces';

const { testActivity } = proxyActivities<
  typeof ActivitiesService.prototype
>({
  startToCloseTimeout: '10 seconds',
  retry: {
    backoffCoefficient: 10,
    maximumAttempts: 2
  }
});


export async function testWorkflow(data: DummyInterface): Promise<string> {
  const test = await testActivity(data);

  return test;
}
