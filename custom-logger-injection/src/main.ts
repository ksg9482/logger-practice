import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLoggerService } from './logger/custom-logger.service';

async function bootstrap() {
  //Custom Logger 를 main.ts 에 지정해주면 전역으로,
  //그리고 Bootstrapping 과정에서도 Custom Logger 사용
  const app = await NestFactory.create(AppModule,{
    bufferLogs: true //// 이 설정이 없으면 NestJS 앱이 구동되는 초반에 잠시동안 내장 로거 사용
  });
  app.useLogger(app.get(CustomLoggerService));
  await app.listen(3000);
}
bootstrap();
