import { NestFactory } from '@nestjs/core';
import { WorkerModule } from './app/worker.module';
import { WorkerService } from './app/worker.service';

async function bootstrap() {
  const app = await NestFactory.create(WorkerModule);

  await app.listen(3001);

  const worker = app.get(WorkerService);
  await worker.run();

  return app;
}
bootstrap();
