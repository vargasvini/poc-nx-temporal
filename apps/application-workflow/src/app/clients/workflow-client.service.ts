import { Injectable } from "@nestjs/common";
import { Client, Connection } from '@temporalio/client';
import { randomUUID } from 'node:crypto';
import { testWorkflow } from '../workflows';

@Injectable()
export class WorkerClientService {
  public async run(): Promise<void> {
    console.log(`Running WorkerClient`);
    const connection = await Connection.connect();
    const client = new Client({ connection });
    const result = await client.workflow.execute(testWorkflow, {
      args: [{
        name: "Dota",
        description: "Melhor jogo"
      }],
      taskQueue: 'application-tasks',
      workflowId: 'workflow-' + randomUUID(),
    });
    console.log(`The Workflow returned: ${result}`);
  }
}
