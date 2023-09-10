import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

//BootStrapping 까지 포함하여 내장 Logger 대체
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true, // 부트스트래핑 과정까지 nest-winston 로거 사용
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform:true
    })
  );
  
//nest-winston 은 LoggerService 를 구현한 WinstonLogger 클래스를 제공
//Nest가 시스템 로깅을 할 때 이 클래스를 이용하도록 해서 
//Nest 시스템에서 출력하는 로그와 우리가 출력하려는 로그의 형식을 동일하게 설정할 수 있다.
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER))
  await app.listen(3000);
}
bootstrap();
